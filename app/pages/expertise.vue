<script setup lang="ts">
const { data: page } = await useAsyncData('expertise', () => queryContent('/expertise').findOne())
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
      <UPageBody>
        <UDashboardCard
          :description="page?.cardDescription"
          icon="i-ic-baseline-code"
        >
          <template #title>
            <h2 class="text-gray-900 dark:text-white font-semibold">
              {{ page?.cardTitle }}
            </h2>
          </template>
          <div class="space-y-2">
            <TechnologyMeter
              v-for="(technology, index) in page?.technologies"
              :key="index"
              :technology="technology"
              :index="index"
            />
          </div>
        </UDashboardCard>
      </UPageBody>
    </UPage>
  </div>
</template>
