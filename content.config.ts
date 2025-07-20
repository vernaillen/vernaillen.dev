import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    pages: defineCollection({
      type: 'page',
      source: {
        include: '**/*.md'
      },
      schema: z.object({
        title: z.string(),
        description: z.string(),
        isblogpost: z.boolean(),
        disableRevealInview: z.boolean(),
        image: z.string(),
        date: z.date(),
        badge: z.string(),
        authors: z.array(z.object({
          name: z.string(),
          description: z.string(),
          to: z.string(),
          avatar: z.object({
            src: z.string(),
            loading: z.string()
          })
        })),
        location: z.string(),
        social: z.array(z.object({
          name: z.string(),
          url: z.string(),
          icon: z.string()
        })).optional(),
        expertise: z.array(z.object({
          label: z.string(),
          icon: z.string(),
          value: z.number(),
          color: z.string(),
          class: z.string()
        })).optional(),
        logos: z.array(z.object({
          label: z.string(),
          icon: z.string(),
          url: z.string()
        })).optional()
      })
    })
  }
})
