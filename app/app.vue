<script setup lang="ts">
useHead({
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { key: 'theme-color', name: 'theme-color', content: '#0c0c0d' }
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' }
  ],
  htmlAttrs: {
    lang: 'en'
  }
})
useSeoMeta({
  titleTemplate: '%s ' + useAppConfig().meta.titleSuffix,
  ogTitle: 'Wouter Vernaillen: Freelance Full Stack Developer'
})

onMounted(() => {
  useGsap.set('.back-to-top', { y: 80 })
  useGsap.to('.back-to-top', {
    y: 0,
    autoAlpha: 1,
    duration: 0.5,
    ease: 'power1.inOut',
    scrollTrigger: {
      trigger: 'body',
      start: 'top -20%',
      end: 'top -20%',
      toggleActions: 'play none reverse none'
    }
  })
})
</script>

<template>
  <div>
    <NuxtLoadingIndicator color="repeating-linear-gradient(to right,rgb(156 142 27/40%) 0%,rgb(156 142 27/60%) 80%,rgb(156 142 27/40%) 100%)" />

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>

    <UNotifications />
    <div class="sticky right-0 bottom-14 z-[-1]">
      <SvgoFooter class="svg-footer w-20" />
    </div>

    <UButton
      class="back-to-top fixed opacity-0
      items-center justify-center
      w-8 h-8
      rounded-md bottom-8 right-8 left-auto z-40
      cursor-pointer
      hover:shadow-signUp hover:bg-opacity-80
      shadow-lg"
      to="#top"
      aria-label="Scroll to top"
    >
      <span class="w-3 h-3 border-t border-l border-black transform rotate-45 mt-[6px]" />
    </UButton>
  </div>
</template>
