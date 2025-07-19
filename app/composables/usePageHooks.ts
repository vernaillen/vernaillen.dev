import { createSharedComposable } from '@vueuse/core'

const _isPageLoading = () => {
  const isPageLoading = ref(false)
  const blurPageContent = ref(false)

  return {
    isPageLoading,
    blurPageContent
  }
}
export const usePageHooks = createSharedComposable(_isPageLoading)
