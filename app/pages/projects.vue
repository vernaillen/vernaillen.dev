<script setup lang="ts">
const { data: page } = await useAsyncData('projects', () => queryContent('/projects').findOne())
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
  description: page.value.description
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
        <UBlogList v-if="page?.projects">
          <UBlogPost
            v-for="(project, index) in page.projects"
            :key="index"
            v-bind="project"
            :ui="{ image: { wrapper: 'aspect-[2/1]' }, badge: { wrapper: 'mb-0' } }"
            class="slide-enter"
            :style="'--enter-stage:' + (index * 3) + ';'"
          >
            <template #badge>
              <div
                v-if="project?.categories"
                class="mb-2"
              >
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
              <LazyImage
                :src="project.image?.src"
                :alt="project.image?.alt"
                :width="384"
                :height="192"
                fit="cover"
                class="h-full"
              />
            </template>
          </UBlogPost>
        </UBlogList>
      </UPageBody>
    </UPage>
  </div>
</template>
