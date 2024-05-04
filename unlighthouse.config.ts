/// <reference types="unlighthouse" />
import { defineConfig } from 'unlighthouse'

export default defineConfig({
  site: 'vernaillen-nuxt.vercel.app',
  scanner: {
    // run lighthouse for each URL 3 times
    samples: 3,
    // use desktop to scan
    device: 'desktop',
    // enable the throttling mode
    // throttle: true,
  },
  debug: true,
})
