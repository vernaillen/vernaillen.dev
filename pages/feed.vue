<script setup lang="ts">
import SocialFeed from '~/components/SocialFeed.vue'

const { data: page } = await useAsyncData('feed', () => queryContent('/feed').findOne())
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

useSeoMeta({
  title: page.value.title,
  ogTitle: page.value.title + useAppConfig().meta.titleSuffix,
  description: page.value.description,
  ogDescription: page.value.description,
})

defineOgImageComponent('Vernaillen', {
  title: page.value.title,
  description: page.value.description,
})
</script>

<template>
  <div>
    <UPageHeader v-bind="page" />
    <UPage>
      <UPageBody :ui="{ wrapper: 'max-w-2xl mx-auto' }">
        <SocialFeed />
      </UPageBody>
    </UPage>
  </div>
</template>
