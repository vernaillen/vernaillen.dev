import nuxtPkg from 'nuxt/package.json'

export default defineNuxtConfig({
  extends: [process.env.NUXT_UI_PRO_PATH || '@nuxt/ui-pro'],

  modules: [
    '@hypernym/nuxt-gsap',
    '@hypernym/nuxt-anime',
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxt/fonts',
    '@nuxtjs/plausible',
    '@nuxthq/studio',
    '@nuxtjs/sitemap',
    '@vueuse/nuxt',
    'nuxt-og-image',
    'nuxt-svgo',
    'nuxt-time'
  ],

  future: {
    compatibilityVersion: 4
  },
  experimental: {
    buildCache: true
  },

  runtimeConfig: {
    public: {
      nuxtVersion: nuxtPkg.version
    },
    githubToken: process.env.GITHUB_TOKEN,
    githubLogin: process.env.GITHUB_LOGIN
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

  site: {
    name: 'Wouter Vernaillen',
    url: 'https://vernaillen.dev/',
    description: 'Freelance Full Stack Developer',
    defaultLocale: 'en'
  },

  css: [
    '~/assets/css/main.css'
  ],

  colorMode: {
    preference: 'dark'
  },

  image: {
    domains: ['cdn.fosstodon.org', 'ui.nuxt.com'],
    provider: 'twicpics',
    format: ['webp'],
    twicpics: {
      baseURL: 'https://vernaillen.twic.pics/vernaillendev'
    }
  },

  anime: {
    composables: true
  },

  gsap: {
    composables: true,
    extraPlugins: {
      scrollTrigger: true
    }
  },

  hooks: {
    'components:extend': (components) => {
      const globals = components.filter(c => ['UButton', 'UIcon', 'UColorModeButton'].includes(c.pascalName))
      globals.forEach(c => c.global = true)
    }
  },

  fonts: {
    defaults: {
      preload: true,
      weights: [400, 500, 600, 700]
    }
  },

  ui: {
    icons: ['heroicons', 'mdi', 'ic', 'logos', 'tabler', 'twemoji', 'ph']
  },

  uiPro: {
    routerOptions: false
  },

  plausible: {
    apiHost: 'https://vernaillen.dev/plio'
  },

  router: {
    options: {
      scrollBehaviorType: 'smooth'
    }
  },

  svgo: {
    svgo: true,
    autoImportPath: './assets/svg/',

    defaultImport: 'component',
    svgoConfig: {
      multipass: true
    }
  },

  sitemap: {
    sources: ['/api/sitemap']
  },

  routeRules: {
    '/**': { prerender: true },
    '/api/search.json': { prerender: true },
    '/releases': { redirect: { to: '/releases-prs', statusCode: 301 } },
    '/plio/js/script.js': { proxy: 'https://plausible.io/js/script.js' },
    '/plio/api/event': { proxy: 'https://plausible.io/api/event' }
  },

  nitro: {
    compressPublicAssets: {
      brotli: true
    }
  },

  // workaround for "Cannot find module 'shiki'" error
  build: { transpile: ['shiki'] },

  devtools: {
    enabled: true
  },

  compatibilityDate: '2024-09-12'
})
