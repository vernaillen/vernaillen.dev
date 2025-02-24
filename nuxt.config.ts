import nuxtPkg from 'nuxt/package.json'

export default defineNuxtConfig({
  extends: [process.env.NUXT_UI_PRO_PATH || '@nuxt/ui-pro'],

  modules: [
    '@hypernym/nuxt-gsap',
    '@nuxtjs/sitemap',
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxt/fonts',
    '@nuxt/test-utils/module',
    '@nuxtjs/plausible',
    '@vueuse/nuxt',
    'motion-v/nuxt',
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

  runtimeConfig: {
    public: {
      nuxtVersion: nuxtPkg.version
    }
  },

  // workaround for "Cannot find module 'shiki'" error
  build: { transpile: ['shiki'] },

  routeRules: {
    '/releases': { redirect: { to: '/releases-prs', statusCode: 301 } },
    '/plio/js/script.js': { proxy: 'https://plausible.io/js/script.js' },
    '/plio/api/event': { proxy: 'https://plausible.io/api/event' }
  },

  future: {
    compatibilityVersion: 4
  },

  compatibilityDate: '2025-01-01',

  hooks: {
    'components:extend': (components) => {
      const globals = components.filter(c => ['UButton', 'UIcon', 'UColorModeButton'].includes(c.pascalName))
      globals.forEach(c => c.global = true)
    }
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    },
    /* checker: {
      lintOnStart: true,
      fix: true
    } */
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
