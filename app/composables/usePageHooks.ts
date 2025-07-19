import { createSharedComposable } from '@vueuse/core'

const _isPageLoading = () => {
  const isPageLoading = ref(false)
  const hidePageContent = ref(false)

  return {
    isPageLoading,
    hidePageContent
  }
}
export const usePageHooks = createSharedComposable(_isPageLoading)
