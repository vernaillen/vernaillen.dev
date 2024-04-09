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

const toc = [ { "id": "passions", "depth": 2, "text": "Passions" }, { "id": "career", "depth": 2, "text": "Career" }, { "id": "contact", "depth": 2, "text": "Contact" } ]
</script>

<template>
  <UContainer>
    <UPageHeader v-bind="page" class="py-[50px]" />

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
        <UContentToc v-if="page?.careerSteps" title="Career steps" :links="page?.careerSteps" />
      </template>
    </UPage>
  </UContainer>
</template>

<style scoped>
ol {
  margin-left: 16px;
}
</style>
