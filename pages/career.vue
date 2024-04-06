<script setup lang="ts">
const { data: page } = await useAsyncData('career', () => queryContent('/career').findOne())
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
  <UContainer>
    <UPageHeader v-bind="page" class="py-[50px]" />

    <UPageBody>
      <ol v-if="page?.careerSteps">
        <li
          v-for="(careerStep, index) in page.careerSteps"
          :key="index"
          :style="{'--animate-duration': `${index/5 + 0.3}s`}"
          class="animate__animated animate__fadeIn"
        >
          <career-step :career-step="careerStep" />
        </li>
      </ol>
    </UPageBody>
  </UContainer>
</template>

<style scoped>
ol {
  margin-left: 16px;
}
</style>
