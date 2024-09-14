import { Octokit } from 'octokit'
import type { ReleaseInfo } from '../../types'

// script by Anthony Fu:
// https://github.com/antfu/releases.antfu.me/blob/main/server/api/releases.ts
// https://releases.antfu.me/

const LIMIT = 100

const ignoreRepos = [
  'vernaillen/wpnuxt-module' // Not sure why the commit appears from a fork, filter it out temporarily
]

export default defineLazyEventHandler(() => {
  const config = useRuntimeConfig()
  const octokit = new Octokit({
    auth: config.githubToken
  })

  let infos: ReleaseInfo[] = []

  async function getDataAtPage(page = 1): Promise<ReleaseInfo[]> {
    const { data } = await octokit.request('GET /users/{username}/events', {
      username: config.githubLogin,
      per_page: 100,
      page
    })

    return data
      .filter(item => item.type === 'PushEvent' && item.public && !ignoreRepos.includes(item.repo.name))
      .flatMap((item): ReleaseInfo => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const payload: any = item.payload || {}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return (payload.commits || []).map((commit: any) => {
          const title = (commit?.message || '').split('\n')[0]
          const version = title.match(/v?(\d+\.\d+\.\d+(?:-[\w.]+)?)(?:\s|$)/)?.[1] || ''
          // if (version && (title.includes('Release') || title.includes('release')))
          //  console.log(item.repo.name, 'title: ', title, 'version: ', version)
          return {
            id: item.id,
            type: item.type!,
            repo: item.repo.name,
            title,
            sha: commit?.sha || '',
            commit: `https://github.com/${item.repo.name}/commit/${commit?.sha}`,
            created_at: item.created_at!,
            version
            // payload: item.payload,
          }
        })
      })
      .filter(item => (item.title.includes('Release') || item.title.includes('release')) && item.version)
  }

  return defineCachedEventHandler(async () => {
    let goNextPage = true
    for (let page = 1; page <= 3; page++) {
      if (!goNextPage)
        break
      try {
        const items = await getDataAtPage(page)
        for (let index = items.length - 1; index >= 0; index--) {
          const current = items[index]!
          /* const found = infos.find(item => item.id === current.id)
          if (found) {
            goNextPage = false
            continue
          } */
          infos.push(current)
        }
      } catch (error) {
        console.error(error)
        goNextPage = false
        break
      }
    }

    // Sort from oldest to newest (will be reversed later)
    infos.sort((a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime())

    // Filter out releases from same repo, keep only the latest one
    infos = infos.filter((info, index) => {
      let i = index + 1
      while (i < infos.length) {
        const next = infos[i++]
        if (next && info.repo === next.repo)
          return false
      }
      return true
    })

    infos.reverse()

    if (infos.length > LIMIT)
      infos.slice(0, LIMIT)

    return infos
  }, {
    maxAge: 60 * 5 /* 5 minutes */,
    swr: true
  })
})
