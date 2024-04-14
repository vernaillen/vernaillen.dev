<script setup lang="ts">
import SocialFeed from '~/components/SocialFeed.vue'

const { data: page } = await useAsyncData('feed', () => queryContent('/feed').findOne())
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

useSeoMeta({
  title: page.value.title,
  ogTitle: page.value.title + ' - Wouter Vernaillen - Freelance Full Stack Developer',
  description: page.value.description,
  ogDescription: page.value.description,
})

defineOgImageComponent('Vernaillen', {
  title: page.value.title,
  description: page.value.description,
})
</script>

<template>
  <UContainer class="">
    <UPageHeader
      v-bind="page"
      class="py-[50px]"
    />
    <UPage>
      <UPageBody class="slide-enter-content max-w-2xl mx-auto">
        <SocialFeed />
      </UPageBody>
    </UPage>
  </UContainer>
</template>
