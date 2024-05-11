import type { ParsedContent } from '@nuxt/content/dist/runtime/types'
import { serverQueryContent } from '#content/server'
import { asSitemapUrl, defineSitemapEventHandler } from '#imports'

export default defineSitemapEventHandler(async (e) => {
  const content = (await serverQueryContent(e).find()) as ParsedContent[]
  return content
    .filter(c => c._dir == 'blog' && c._extension == 'md')
    .map((c) => {
      return asSitemapUrl({
        loc: c._path,
        lastmod: new Date(),
        images: [
          { loc: c.image?.src }
        ]
      })
    })
})
