<script setup lang="ts">
const { data: page } = await useAsyncData('projects', () => queryContent('/projects').findOne())
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

const isYearly = ref(false)
</script>

<template>
  <div v-if="page">
    <UContainer>
      <UPageHeader v-bind="page" class="py-[50px]" />

      <UPage>
        <UPageBody class="slide-enter-content">
          <UBlogList v-if="page?.projects">
            <UBlogPost
              v-for="(project, index) in page.projects"
              :key="index"
              v-bind="project"
              :ui="{ image: { wrapper: 'aspect-[2/1]' }, badge: { wrapper: 'mb-0'} }"
              class="slide-enter"
              :style="'--enter-stage:' + index + ';--enter-step:60ms;'"
            >
              <template #badge>
                <div v-if="project?.categories" class="mb-2">
                  <UButton
                    v-for="(cat, catIndex) in project.categories"
                    :key="catIndex"
                    :label="cat"
                    size="2xs"
                    color="primary"
                    variant="outline"
                    class="ml-1"
                  />
                </div>
              </template>
              <template #image>
                <NuxtImg
                  :src="project.image?.src" :alt="project.image?.alt" width="384" height="192" format="webp" fit="cover"
                  class="object-cover object-top w-full h-full transform transition-transform duration-200 group-hover:scale-105"
                />
              </template>
            </UBlogPost>
          </UBlogList>
        </UPageBody>
      </UPage>
    </UContainer>
  </div>
</template>
