<script setup>
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import ScrollToPlugin from 'gsap/ScrollToPlugin'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' }
  ],
  htmlAttrs: {
    lang: 'en'
  }
})

const { data: navigation } = await useAsyncData('navigation', () =>
  queryCollection('pages')
    .where('path', 'NOT LIKE', '/blog/%')
    .order('id', 'ASC')
    .all()
)
provide('navigation', navigation)

const origWarn = console.warn
console.warn = function (...args) {
  if (args[0] && args[0].toString().includes('toRefs() expects a reactive object but received a plain one')) {
    // console.log(new Error().stack)
    // hide the warning
    return
  }
  origWarn.apply(console, args)
}
</script>

<template>
  <UApp>
    <NuxtRouteAnnouncer />
    <NuxtLoadingIndicator color="repeating-linear-gradient(to right,rgb(156 142 27/40%) 0%,rgb(156 142 27/60%) 80%,rgb(156 142 27/40%) 100%)" />
    <AppHeader />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <AppFooter />
    <AppScrollHelpers />
  </UApp>
</template>
