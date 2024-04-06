<script setup lang="ts">
const colorMode = useColorMode()

const color = computed(() => colorMode.value === 'dark' ? '#0c0c0d' : 'white')

useHead({
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { key: 'theme-color', name: 'theme-color', content: color }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' }
  ],
  htmlAttrs: {
    lang: 'en'
  }
})

useSeoMeta({
  titleTemplate: '%s - Vernaillen.dev by Wouter Vernaillen',
  ogImage: 'https://vernaillen.dev/social-card.png',
  twitterImage: 'https://vernaillen.dev/social-card.png',
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <div>
    <NuxtLoadingIndicator color="repeating-linear-gradient(to right,rgb(156 142 27/40%) 0%,rgb(156 142 27/60%) 80%,rgb(156 142 27/40%) 100%)" />

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>

    <UNotifications />
  </div>
</template>

<style>
@keyframes slide-enter {
  0% {
    transform: translateY(10px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 100
  }
}

@media (prefers-reduced-motion:no-preference) {
  :not(.no-sliding) .slide-enter-content :not(.no-sliding) [slide-enter],
  :not(.no-sliding) .slide-enter-content :not(.no-sliding) .slide-enter {
    --enter-stage: 0;
    --enter-step: 30ms;
    --enter-initial: 0ms;
    animation: slide-enter 0.1s both 0.1s;
    animation-delay: calc(var(--enter-initial) + var(--enter-stage) * var(--enter-step));
  }
}

</style>
