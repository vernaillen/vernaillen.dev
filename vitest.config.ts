import { fileURLToPath } from 'node:url'
import { defineVitestConfig } from '@nuxt/test-utils/config'

export default defineVitestConfig({
  test: {
    environment: 'nuxt',
    environmentOptions: {
      nuxt: {
        rootDir: fileURLToPath(new URL('test/', import.meta.url)),
        domEnvironment: 'happy-dom',
        overrides: {
          ogImage: {
            enabled: false
          }
        }
      }
    }
  }
})
