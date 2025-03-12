import { asSitemapUrl, defineSitemapEventHandler } from '#imports'
import { formatDateISO } from '~/utils'

export default defineSitemapEventHandler(async () => {
  const events = await $fetch<ReturnType<typeof asSitemapUrl>>(
    `https://api.dastacreative.uz/api/projects/sitemap/categories/`
  )
  return events.map((item: { slug: string; updated_at: string }) => {
    return {
      loc: '/category/' + item.slug,
      lastmod: formatDateISO(item.updated_at),
      priority: 0.8,
    }
  })
})
