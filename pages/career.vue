<script setup lang="ts">
const { data: page } = await useAsyncData('career', () => queryContent('/career').findOne())
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
    <UPageHeader
      v-bind="page"
      class="py-[50px]"
    />

    <UPage>
      <UPageBody class="slide-enter-content">
        <ol v-if="page?.careerSteps">
          <li
            v-for="(careerStep, index) in page.careerSteps"
            :key="index"
            class="slide-enter"
            :style="'--enter-stage:' + index + ';--enter-step:60ms;'"
          >
            <career-step :career-step="careerStep" />
          </li>
        </ol>
      </UPageBody>
      <template #right>
        <UContentToc
          v-if="page?.careerSteps"
          :links="page?.careerSteps"
        />
      </template>
    </UPage>
  </div>
</template>

<style scoped>
ol {
  margin-left: 16px;
}
</style>
