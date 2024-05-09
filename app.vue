<script setup lang="ts">
useHead({
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { key: 'theme-color', name: 'theme-color', content: '#0c0c0d' },
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' },
  ],
  htmlAttrs: {
    lang: 'en',
  },
})
useSeoMeta({
  titleTemplate: '%s ' + useAppConfig().meta.titleSuffix,
  ogTitle: 'Wouter Vernaillen: Freelance Full Stack Developer',
})
onMounted(() => {
  useGsap.to('.svg-footer', {
    scrollTrigger: {
      trigger: '.homeLandingSection0',
      start: 'top center',
      toggleActions: 'play pause reverse reset',
    },
    opacity: 0.3,
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
  </div>
</template>
