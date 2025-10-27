import type { FileAfterParseHook } from '@nuxt/content'
import nuxtPkg from 'nuxt/package.json'

export default defineNuxtConfig({

  modules: [
    '@nuxtjs/seo',
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxt/content',
    '@nuxt/image',
    '@nuxtjs/plausible',
    '@nuxt/test-utils/module',
    '@vueuse/nuxt',
    'nuxt-svgo',
    '@nuxt/scripts'
  ],

  devtools: {
    enabled: true
  },

  app: {
    head: {
      titleTemplate: '%s - Wouter Vernaillen',
      templateParams: {
        separator: '~'
      }
    }
  },

  css: ['~/assets/css/main.css'],

  site: {
    name: 'Wouter Vernaillen',
    url: 'https://vernaillen.vercel.app',
    description: 'Freelance Full Stack Developer',
    defaultLocale: 'en'
  },

  colorMode: {
    preference: 'light'
  },

  content: {
    preview: {
      api: 'https://api.nuxt.studio',
      gitInfo: {
        name: 'vernaillen.dev',
        owner: 'vernaillen',
        url: 'https://github.com/vernaillen/vernaillen.dev'
      }
    },
    build: {
      markdown: {
        rehypePlugins: {
          'rehype-external-links': {
            options: {
              rel: [],
              target: '_blank'
            }
          }
        }
      }
    }
  },

  runtimeConfig: {
    public: {
      nuxtVersion: nuxtPkg.version
    }
  },
  build: {
    transpile: ['gsap']
  },

  routeRules: {
    '/plio/js/script.js': { proxy: 'https://plausible.io/js/script.js' },
    '/plio/api/event': { proxy: 'https://plausible.io/api/event' }
  },

  compatibilityDate: '2025-09-20',

  hooks: {
    'content:file:afterParse'(ctx) {
      processContent(ctx)
    }
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    },
    checker: {
      lintOnStart: true,
      fix: true
    }
  },

  icon: {
    customCollections: [{
      prefix: 'custom',
      icons: {
        liferay: {
          body: '<path d="M13.653 30.436H0V17.35c0-.57 0-.57.57-.57h13.37c-.285 4.836-.285 9.387-.285 13.653z" fill="#1d396b"/><path d="M13.653 0v13.653H0V0h13.653z" fill="#0b1f3b"/><path d="M50.347 33.564H64v13.653H50.347V33.564zm-2.845 16.783V64H33.85V50.347h13.653z" fill="#1d396b"/><path d="M50.347 50.347H64V64H50.347V50.347z" fill="#0b1f3b"/><path d="M30.436 0v13.653H16.782V0h13.653z" fill="#1d396b"/><path d="M30.436 16.782v13.653H16.782V16.782h13.653zM47.502 0v13.653H33.85V0h13.653zm-33.85 33.564v13.653H0V33.564h13.653zm33.85 0v13.653H33.85V33.564h13.653zM64 16.782v13.653H50.347V16.782H64zM30.436 50.347V64H16.782V50.347h13.653z" fill="#7cb1df"/>',
          width: 64,
          height: 64
        },
        qa: {
          body: '<path fill="#9c8e1b" d="M90.12,112.94l-11.7-2.1-5.81,10.39c-4.21,5.22-6.88-3.36-8.06-6.35L53.26,93.58c2.6-.9,5.74-3.51,9-6.43,6.43.13,12.42-1,16.83-6.6l13,25.08,1.13,2.4c.88,3.13.42,5.2-3,4.91Zm-86.68,0,11.7-2.1L21,121.23c4.21,5.22,6.88-3.36,8.06-6.35L40.3,93.58c-2.6-.9-5.74-3.51-9-6.43-6.43.13-12.42-1-16.83-6.6l-13,25.08L.39,108c-.89,3.13-.42,5.2,3.05,4.91ZM70.5,8a6,6,0,0,1,2,1.26l5.72,5.28h0a6.59,6.59,0,0,1,1.4,1.89,5.7,5.7,0,0,1,.56,2.33,6.18,6.18,0,0,1-.39,2.37,5.51,5.51,0,0,1-1.3,2l-.76.83a34.66,34.66,0,0,1,3,7l.55,0a5.88,5.88,0,0,1,2.37.38,6,6,0,0,1,2,1.27l0,0a5.8,5.8,0,0,1,1.37,1.91,6.16,6.16,0,0,1,.55,2.29l.29,7.87A5.87,5.87,0,0,1,86.3,49a6,6,0,0,1-1.94,1.41,6.2,6.2,0,0,1-2.33.52l-1.14,0a35.18,35.18,0,0,1-2.83,7l.41.36.11.11a5.9,5.9,0,0,1,1.33,1.94,6,6,0,0,1,.52,2.29,6.16,6.16,0,0,1-.35,2.3,6.29,6.29,0,0,1-1.19,2l-.07.07L73.5,72.71a6.1,6.1,0,0,1-1.9,1.44,5.9,5.9,0,0,1-2.37.56,6.5,6.5,0,0,1-2.4-.39,5.59,5.59,0,0,1-2-1.3L64,72.2a34.45,34.45,0,0,1-6.89,2.92l0,.57a5.49,5.49,0,0,1-.39,2.36,5.64,5.64,0,0,1-1.26,2l0,0a5.66,5.66,0,0,1-1.91,1.37,6.12,6.12,0,0,1-2.28.56l-7.87.28A5.88,5.88,0,0,1,39,80.69a6.15,6.15,0,0,1-1.41-1.94A6.4,6.4,0,0,1,37,76.42l0-1.15A34.85,34.85,0,0,1,30,72.44l-.38.41-.1.11a5.75,5.75,0,0,1-1.94,1.33,6.26,6.26,0,0,1-4.58.17,6.52,6.52,0,0,1-2-1.19l-.07-.07L15.2,67.81a6.68,6.68,0,0,1-1.4-1.91,6,6,0,0,1-.56-2.33,6.61,6.61,0,0,1,.39-2.36,6.46,6.46,0,0,1,1.3-2l.81-.87a35.39,35.39,0,0,1-2.92-6.9l-.56,0a5.49,5.49,0,0,1-2.36-.39,5.82,5.82,0,0,1-2-1.26l0,0a5.91,5.91,0,0,1-1.37-1.91,6.41,6.41,0,0,1-.55-2.29l-.29-7.87A6.47,6.47,0,0,1,6,35.36a6.41,6.41,0,0,1,1.26-2A6.15,6.15,0,0,1,9.2,31.92a6.4,6.4,0,0,1,2.33-.52l1.14,0a35.32,35.32,0,0,1,2.84-7L15.14,24a5.6,5.6,0,0,1-1.41-1.94,5.86,5.86,0,0,1-.56-2.33,5.75,5.75,0,0,1,.39-2.36,6.07,6.07,0,0,1,1.26-2L20.1,9.62v0A6.49,6.49,0,0,1,22,8.18a5.85,5.85,0,0,1,2.33-.55A6.36,6.36,0,0,1,26.69,8a5.51,5.51,0,0,1,2,1.3l.89.82a35.12,35.12,0,0,1,6.87-2.92l0-.6a5.64,5.64,0,0,1,.39-2.36,6,6,0,0,1,1.26-2l0,0A5.73,5.73,0,0,1,40,.85,6.17,6.17,0,0,1,42.28.29L50.14,0a6.53,6.53,0,0,1,2.37.35,5.53,5.53,0,0,1,2,1.27A5.86,5.86,0,0,1,56,3.55a6.4,6.4,0,0,1,.52,2.33l0,1.14a35.37,35.37,0,0,1,7,2.83l.35-.37a5.57,5.57,0,0,1,1.94-1.4,5.78,5.78,0,0,1,2.33-.56,5.91,5.91,0,0,1,2.36.38V8ZM37.83,35l5.69,5.36L54.94,28.7c1.13-1.15,1.84-2.06,3.23-.63L62.7,32.7c1.49,1.47,1.41,2.33,0,3.7L46.09,52.71c-3,2.9-2.44,3.08-5.43.11L30.2,42.42a1.32,1.32,0,0,1,.13-2l5.25-5.44c.8-.82,1.43-.77,2.25,0ZM41.73,16A25.64,25.64,0,1,1,21.65,46.21,25.65,25.65,0,0,1,41.73,16Z"/>',
          width: 123,
          height: 123
        }
      }
    }]
  },

  image: {
    domains: ['cdn.fosstodon.org', 'ui.nuxt.com'],
    provider: 'twicpics',
    format: ['webp'],
    twicpics: {
      baseURL: 'https://vernaillen.twic.pics/vernaillendev'
    }
  },

  plausible: {
    apiHost: 'https://vernaillen.dev/plio'
  },

  seo: {
    meta: {
      title: 'Wouter Vernaillen',
      description: 'Freelance Full Stack Developer, specializing in Java, Spring, Nuxt & DevOps.',
      ogTitle: 'Wouter Vernaillen',
      ogDescription: 'Freelance Full Stack Developer, specializing in Java, Spring, Nuxt & DevOps.',
      ogImage: 'https://vernaillen.dev/social-card.png'
    },
    enabled: true,
    debug: true
  },

  sitemap: {
    sources: ['/api/sitemap']
  },

  svgo: {
    svgo: true,
    autoImportPath: './assets/svg/',

    defaultImport: 'component',
    svgoConfig: {
      multipass: true
    }
  }
})

function processContent(ctx: FileAfterParseHook) {
  const body = ctx?.content?.body as { value: [string, Record<string, string>][] }
  if (body?.value) {
    let index = 0
    body.value.forEach(([node1, node2]) => {
      if (node1 === 'p' || node1 === 'ul' || node1 === 'h1' || node1 === 'h2' || node1 === 'h3' || node1 === 'h4' || node1 === 'h5' || node1 === 'h6') {
        /* if (Array.isArray(node2.className)) {
          node2.className.push('slide-enter')
        } else if (typeof node2.className === 'undefined') {
          node2.className = 'slide-enter'
        } */
        node2['data-index-number'] = '' + index++
      }
    })
  }
}
