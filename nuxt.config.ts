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
    '@nuxt/test-utils/module',
    '@nuxtjs/plausible',
    '@nuxthq/studio',
    '@nuxtjs/sitemap',
    '@vueuse/nuxt',
    'nuxt-og-image',
    'nuxt-svgo',
    'nuxt-time'
  ],

  devtools: {
    enabled: true
  },

  css: [
    '~/assets/css/main.css'
  ],

  router: {
    options: {
      scrollBehaviorType: 'smooth'
    }
  },

  site: {
    name: 'Wouter Vernaillen',
    url: 'https://vernaillen.dev/',
    description: 'Freelance Full Stack Developer',
    defaultLocale: 'en'
  },

  colorMode: {
    preference: 'dark'
  },

  ui: {
    icons: ['heroicons', 'mdi', 'ic', 'logos', 'tabler', 'twemoji', 'ph']
  },

  runtimeConfig: {
    public: {
      nuxtVersion: nuxtPkg.version
    },
    githubToken: process.env.GITHUB_TOKEN,
    githubLogin: process.env.GITHUB_LOGIN
  },

  // workaround for "Cannot find module 'shiki'" error
  build: { transpile: ['shiki'] },

  routeRules: {
    '/**': { prerender: true },
    '/api/search.json': { prerender: true },
    '/releases': { redirect: { to: '/releases-prs', statusCode: 301 } },
    '/plio/js/script.js': { proxy: 'https://plausible.io/js/script.js' },
    '/plio/api/event': { proxy: 'https://plausible.io/api/event' }
  },

  future: {
    compatibilityVersion: 4
  },
  experimental: {
    buildCache: true
  },

  compatibilityDate: '2025-01-01',

  nitro: {
    compressPublicAssets: {
      brotli: true
    }
  },

  hooks: {
    'components:extend': (components) => {
      const globals = components.filter(c => ['UButton', 'UIcon', 'UColorModeButton'].includes(c.pascalName))
      globals.forEach(c => c.global = true)
    }
  },

  anime: {
    composables: true
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

  fonts: {
    defaults: {
      preload: true,
      weights: [400, 500, 600, 700]
    }
  },

  gsap: {
    composables: true,
    extraPlugins: {
      scrollTrigger: true
    }
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
  },

  uiPro: {
    routerOptions: false
  }
})
