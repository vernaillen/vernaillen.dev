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
    '@nuxthq/studio',
    '@nuxtjs/plausible',
    '@nuxtjs/sitemap',
    '@vueuse/nuxt',
    'nuxt-og-image',
    'nuxt-svgo',
    'nuxt-time'
  ],
  future: {
    compatibilityVersion: 4
  },
  content: {
    sources: {
      content: {
        driver: 'fs',
        base: './content'
      }
    }
  },
  runtimeConfig: {
    public: {
      nuxtVersion: nuxtPkg.version
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
    icons: ['heroicons', 'mdi', 'ic', 'logos', 'tabler', 'twemoji']
  },
  uiPro: {
    routerOptions: false
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
  plausible: {
    apiHost: 'https://vernaillen.dev/plio'
  },
  routeRules: {
    '/**': { prerender: true },
    '/api/search.json': { prerender: true }
  },
  nitro: {
    compressPublicAssets: {
      brotli: true
    }
  },
  devtools: {
    enabled: true
  }
})
