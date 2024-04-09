<script setup lang="ts">
const { data: page } = await useAsyncData('about', () => queryContent('/about').findOne())
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

useSeoMeta({
  title: page.value.title,
  ogTitle: page.value.title,
  description: page.value.description,
  ogDescription: page.value.description
})

defineOgImage({
  component: 'Vernaillen',
  title: page.value.title,
  description: page.value.description
})
</script>

<template>
  <UContainer class="">
    <UPageHeader v-bind="page" class="py-[50px]" />

    <UPage>
      <UPageBody prose class="slide-enter-content">
        <ContentRenderer v-if="page && page.body" :value="page" />
      </UPageBody>

      <template #right>
        {{ page.body.toc.links }}
        <UContentToc v-if="page?.body?.toc" :links="page.body.toc.links" />
      </template>
    </UPage>
  </UContainer>
</template>
