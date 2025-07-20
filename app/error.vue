<script setup>
defineProps({
  error: {
    type: Object,
    required: true
  }
})

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
</script>

<template>
  <UApp>
    <NuxtRouteAnnouncer />
    <NuxtLoadingIndicator color="repeating-linear-gradient(to right,rgb(156 142 27/40%) 0%,rgb(156 142 27/60%) 80%,rgb(156 142 27/40%) 100%)" />
    <AppHeader />
    <NuxtLayout>
      <UError :error="error" />
    </NuxtLayout>
    <AppFooter />
    <AppScrollHelpers />
  </UApp>
</template>
