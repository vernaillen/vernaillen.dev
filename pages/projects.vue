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

      <UPageBody class="slide-enter-content">
        <UBlogList v-if="page?.projects">
          <UBlogPost
            v-for="(project, index) in page.projects"
            :key="index"
            v-bind="project"
            :ui="{ image: { wrapper: 'aspect-[40/15]' }, badge: { wrapper: 'mb-0'} }"
            class="slide-enter"
            :style="'--enter-stage:' + index + ';--enter-step:60ms;'"
          >
            <template #badge>
              <UButton
                v-if="project?.badge"
                icon="i-ci-external-link"
                size="2xs"
                color="primary"
                variant="ghost"
                class="absolute right-0 top-1"
                :label="project.badge.label"
                :trailing="true"
              />
            </template>
          </UBlogPost>
        </UBlogList>
      </UPageBody>
    </UContainer>
  </div>
</template>
