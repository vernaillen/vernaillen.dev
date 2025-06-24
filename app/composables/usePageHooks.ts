import { createSharedComposable } from '@vueuse/core'

const _isPageLoading = () => {
  const isPageLoading = ref(false)

  return {
    isPageLoading
  }
}
export const usePageHooks = createSharedComposable(_isPageLoading)
