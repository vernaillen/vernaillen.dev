export function useFontsLoaded() {
  const fontsLoaded = ref(false)

  onMounted(async () => {
    if (typeof document !== 'undefined' && 'fonts' in document) {
      try {
        await document.fonts.ready
        fontsLoaded.value = true
      } catch {
        // Fallback if fonts API fails
        fontsLoaded.value = true
      }
    } else {
      // Fallback for browsers without Font Loading API
      fontsLoaded.value = true
    }
  })

  return fontsLoaded
}
