import { Octokit } from 'octokit'

export default defineCachedEventHandler(async () => {
  const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN
  })

  const { data: commits } = await octokit.request('GET /repos/vernaillen/vernaillen.dev/commits')
  return commits
}, {
  group: 'api',
  name: 'commits',
  swr: true,
  maxAge: 60 * 5 // 5 minutes
})
