<script setup lang="ts">
const { data: page } = await useAsyncData('about', () => queryCollection('pages').path('/about').first())
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}
useSeoMeta({
  title: page.value.title,
  ogTitle: page.value.title + useAppConfig().meta.titleSuffix,
  description: page.value.description,
  ogDescription: page.value.description
})
defineOgImageComponent('Vernaillen', {
  title: page.value.title,
  description: page.value.description,
  author: 'Wouter Vernaillen'
})
definePageMeta({
  colorMode: 'dark'
})
</script>

<template>
  <div>
    <UPageHeader v-bind="page" />
    <UPage>
      <UPageBody prose>
        <ContentRenderer
          v-if="page && page.body"
          :value="page"
        />
      </UPageBody>

      <template #right>
        <UContentToc
          v-if="page?.body?.toc"
          :links="page.body.toc.links"
        />
      </template>
    </UPage>
  </div>
</template>
