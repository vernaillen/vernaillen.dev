import nuxtPkg from 'nuxt/package.json'

export default defineNuxtConfig({
  extends: [process.env.NUXT_UI_PRO_PATH || '@nuxt/ui-pro'],
  modules: [
    '@hypernym/nuxt-anime',
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxt/fonts',
    '@nuxthq/studio',
    '@vueuse/nuxt',
    'nuxt-og-image',
    'nuxt-svgo',
    'nuxt-time',
  ],
  runtimeConfig: {
    public: {
      nuxtVersion: nuxtPkg.version,
    },
  },
  eslint: {
    config: {
      stylistic: true,
    },
    checker: {
      lintOnStart: true,
      fix: true,
    },
  },
  site: {
    name: 'Wouter Vernaillen',
    url: 'https://vernaillen-nuxt.vercel.app/',
    description: 'Freelance Full Stack Developer',
    defaultLocale: 'en',
  },
  css: [
    '~/assets/css/main.css',
  ],
  colorMode: {
    preference: 'dark',
  },
  image: {
    domains: ['cdn.fosstodon.org', 'ui.nuxt.com'],
    provider: 'twicpics',
    format: ['webp'],
    twicpics: {
      baseURL: 'https://vernaillen.twic.pics/vernaillennuxt',
    },
  },
  anime: {
    composables: true,
  },
  hooks: {
    'components:extend': (components) => {
      const globals = components.filter(c => ['UButton', 'UIcon', 'UColorModeButton'].includes(c.pascalName))
      globals.forEach(c => c.global = true)
    },
  },
  ui: {
    icons: ['heroicons', 'mdi', 'ic', 'logos', 'tabler', 'twemoji'],
  },
  uiPro: {
    routerOptions: false,
  },
  router: {
    options: {
      scrollBehaviorType: 'smooth',
    },
  },
  svgo: {
    svgo: true,
    autoImportPath: './assets/svg/',

    defaultImport: 'component',
    svgoConfig: {
      multipass: true,
    },
  },
  routeRules: {
    '/': { prerender: true },
    '/career': { prerender: true },
    '/projects': { prerender: true },
    '/blog': { prerender: true },
    '/blog/**': { prerender: true },
    '/api/search.json': { prerender: true },
  },
  devtools: {
    enabled: true,
  },
})
