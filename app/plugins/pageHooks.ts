const { isMobileNavOpen, isMobileNavClosing } = useMobileNav()
const { isPageLoading } = usePageHooks()

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('page:start', () => {
    isPageLoading.value = true
  })
  nuxtApp.hook('page:finish', () => {
    isMobileNavClosing.value = true
    setTimeout(() => {
      isMobileNavOpen.value = false
      isMobileNavClosing.value = false
    }, 150)
    isPageLoading.value = false
  })
})
