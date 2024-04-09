// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: [process.env.NUXT_UI_PRO_PATH || '@nuxt/ui-pro'],
  modules: [
    '@hypernym/nuxt-anime',
    '@nuxt/content',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxt/fonts',
    '@nuxthq/studio',
    '@vueuse/nuxt',
    'nuxt-og-image',
    'nuxt-svgo',
    'nuxt-time'
  ],
  site: {
    name: 'Wouter Vernaillen',
    logo: '/images/vernaillendev-light.png',
    url: 'https://vernaillen-nuxt.vercel.app',
    description: 'Freelance Full Stack Developer',
    defaultLocale: 'en',
  },
  social: {
    networks: {
      mastodon: {
        identifier: 'vernaillen@fosstodon.org',
        options: {
          excludeReplies: true,
          excludeReblogs: false,
          limit: 100
        }
      }
    }
  },
  css: [
    '~/assets/css/main.css',
    'animate.css/animate.min.css'
  ],
  colorMode: {
    preference: 'dark'
  },
  image: {
    domains: ['cdn.fosstodon.org'],
    provider: 'twicpics',
    format: ['webp'],
    twicpics: {
      baseURL: 'https://vernaillen.twic.pics/vernaillennuxt'
    }
  },
  anime: {
    composables: true
  },
  hooks: {
    // Define `@nuxt/ui` components as global to use them in `.md` (feel free to add those you need)
    'components:extend': (components) => {
      const globals = components.filter((c) => ['UButton'].includes(c.pascalName))

      globals.forEach((c) => c.global = true)
    }
  },
  ui: {
    icons: ['heroicons', 'simple-icons', 'mdi', 'carbon', 'logos', 'ic']
  },
  svgo: {
    svgo: true,
    autoImportPath: './assets/svg/',

    defaultImport: 'component',
    svgoConfig: {
      multipass: true
    }
  },
  colorMode: {
    preference: 'light'
  },
  routeRules: {
    '/' : { prerender: true },
    '/career' : { prerender: true },
    '/projects' : { prerender: true },
    '/blog' : { prerender: true },
    '/blog/**' : { prerender: true },
    '/api/search.json': { prerender: true }
  },
  devtools: {
    enabled: true
  }
})
