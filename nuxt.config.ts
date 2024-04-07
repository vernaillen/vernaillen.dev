// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: [process.env.NUXT_UI_PRO_PATH || '@nuxt/ui-pro'],
  modules: [
    '@nuxt/content',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxt/fonts',
    '@nuxthq/studio',
    '@vueuse/nuxt',
    'nuxt-og-image',
    'nuxt-svgo'
  ],
  site: {
    // production URL
    url: 'https://vernaillen-nuxt.vercel.app',
  },
  css: [
    '~/assets/css/main.css',
    'animate.css/animate.min.css'
  ],
  hooks: {
    // Define `@nuxt/ui` components as global to use them in `.md` (feel free to add those you need)
    'components:extend': (components) => {
      const globals = components.filter((c) => ['UButton'].includes(c.pascalName))

      globals.forEach((c) => c.global = true)
    }
  },
  ui: {
    icons: ['heroicons', 'simple-icons', 'mdi', 'carbon', 'logos']
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
    '/api/search.json': { prerender: true }
  },
  devtools: {
    enabled: true
  }
})
