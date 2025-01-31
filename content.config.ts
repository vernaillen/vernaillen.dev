import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    pages: defineCollection({
      type: 'page',
      source: '**',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        pageName: z.string(),
        cardTitle: z.string(),
        cardDescription: z.string(),
        hero: z.object({
          title: z.string(),
          description: z.string(),
          headline: z.object({
            label: z.string()
          }),
          links: z.array(z.object({
            label: z.string(),
            to: z.string(),
            size: z.string(),
            color: z.string(),
            icon: z.string(),
            trailing: z.boolean()
          }))
        }),
        sections: z.array(z.object({
          title: z.string(),
          description: z.string(),
          features: z.array(z.object({
            name: z.string(),
            description: z.string(),
            icon: z.string()
          }))
        })),
        features: z.array(z.object({
          title: z.string(),
          description: z.string(),
          items: z.array(z.object({
            title: z.string(),
            description: z.string(),
            icon: z.string()
          }))
        })),
        testimonials: z.array(z.object({
          headline: z.string(),
          title: z.string(),
          items: z.array(z.object({
            quote: z.string(),
            author: z.object({
              name: z.string(),
              description: z.string(),
              avatar: z.object({
                src: z.string(),
                loading: z.string()
              })
            })
          }))
        })),
        technologies: z.array(z.object({
          label: z.string(),
          icon: z.string(),
          value: z.number(),
          color: z.string(),
          class: z.string()
        })),
        careerSteps: z.array(z.object({
          text: z.string(),
          contract: z.string(),
          date: z.string(),
          project: z.string(),
          projectUrl: z.string(),
          role: z.string(),
          stack: z.string(),
          imageUrl: z.string(),
          id: z.string()
        })),
        projects: z.array(z.object({
          title: z.string(),
          description: z.string(),
          to: z.string(),
          target: z.string(),
          categories: z.array(z.string()),
          image: z.object({
            src: z.string(),
            alt: z.string()
          })
        }))
      })
    }),
    blog: defineCollection({
      type: 'page',
      source: 'blog/**.md',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        badge: z.object({
          label: z.string(),
          size: z.string(),
          color: z.string(),
          variant: z.string()
        }),
        image: z.object({
          src: z.string(),
          alt: z.string()
        }),
        authors: z.array(z.object({
          name: z.string(),
          to: z.string(),
          avatar: z.object({
            src: z.string(),
            loading: z.string()
          })
        })),
        date: z.date(),
        location: z.string(),
        categories: z.array(z.string()),
        thumbnail_dark: z.string(),
        thumbnail_light: z.string(),
        social: z.array(z.object({
          name: z.string(),
          url: z.string()
        })).optional()
      })
    })
  }
})
