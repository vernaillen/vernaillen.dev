import { defineConfig } from 'unlighthouse'

export default defineConfig({
  // site: 'vernaillen.dev',
  site: 'localhost:3000',
  scanner: {
    // run lighthouse for each URL 3 times
    // samples: 3,
    // use desktop to scan
    // device: 'desktop',
    // enable the throttling mode
    // throttle: true,
  },
  chrome: {
    useSystem: false,
  },
  debug: true,
})
