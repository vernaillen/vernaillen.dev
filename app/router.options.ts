import type { RouterConfig } from '@nuxt/schema'

export default <RouterConfig>{
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return { ...savedPosition, behavior: 'smooth' }
    }
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }
    return { top: 0, left: 0, behavior: 'smooth' }
  }
}
