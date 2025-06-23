import type { PagesCollectionItem } from '@nuxt/content'
import { queryCollection } from '#imports'

export default defineSitemapEventHandler(async (e) => {
  // @ts-expect-error - typecheck does not detect correct queryCollection server import
  const content = await queryCollection(e, 'pages').all() as PagesCollectionItem[]

  return content
    // .filter(c => c.path.startsWith('blog') && c.path.endsWith('.md'))
    .map((c) => {
      return asSitemapUrl({
        loc: c.path,
        lastmod: new Date(),
        images: c.image ? [{ loc: c.image }] : []
      })
    })
})
