/// <reference types="vite-svg-loader" />

<script setup lang="ts">
import { SpeedInsights } from "@vercel/speed-insights/nuxt"
import { useRoute } from '#imports'
const { isMobileNavOpen } = useMobileNav()

useHead({
  titleTemplate: (title?: string) => `${title} - Wouter Vernaillen: Freelance Full Stack Java, Vue & Nuxt Developer`,
  htmlAttrs: {
    lang: 'en'
  },
  bodyAttrs: {
    class: 'dark:bg-black'
  },
  link: [
    {
      rel: 'icon',
      href: '/favicon.svg',
      type: 'image/svg+xml'
    }
  ]
})
onMounted(() => {
  window.addEventListener('resize', () => { isMobileNavOpen.value = false })
})
const route = useRoute()
const isIG = computed(() => {
  return route.path.startsWith('/instagram')
})
</script>

<template>
  <div>
    <NuxtLoadingIndicator v-if="!isIG" color="repeating-linear-gradient(to right,rgb(156 142 27/40%) 0%,rgb(156 142 27/60%) 80%,rgb(156 142 27/40%) 100%)" />
    <header-component v-if="!isIG" />
    <NuxtPage />
    <footer-component v-if="!isIG" />
    <EasyLightbox v-if="!isIG" />
    <SpeedInsights v-if="!isIG" />
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

.skeleton-loading-bg {
  background: linear-gradient(
    90deg,
    rgba(190, 190, 190, 0.1) 25%,
    rgba(129, 129, 129, 0.12) 37%,
    rgba(190, 190, 190, 0.1) 63%
  );
  background-size: 400% 100%;
  animation: skeleton-loading 0.4s ease infinite;
}

@keyframes skeleton-loading {
  0% {
    background-position: 100% 50%;
  }
  to {
    background-position: 0 50%;
  }
}

</style>
