<script setup lang="ts">
import type { Project } from '~/types'

const props = defineProps<{
  project: Project
  index: number
}>()

const projectRef = ref<HTMLDivElement>()
onMounted(() => {
  if (projectRef.value) {
    revealInView(projectRef.value, props.index)
  }
})
</script>

<template>
  <div
    ref="projectRef"
    class="opacity-20 translate-y-5"
  >
    <UPageCard
      :title="project.title"
      :description="project.description"
      :index="index + 1"
      :to="project.to"
      target="_blank"
      variant="subtle"
      :ui="{
        container: 'gap-x-0 cursor-pointer p-0 sm:p-0 shadow-md',
        wrapper: 'order-last lg:order-last'
      }"
    >
      <NuxtImg
        :src="project.image.src"
        :alt="project.image.alt"
        class="w-full rounded-t-lg aspect-video object-cover"
        format="webp"
      />
      <template #footer>
        <UButton
          v-if="project.to"
          :to="project.to"
          target="_blank"
          class="text-primary flex items-center"
          color="neutral"
          variant="soft"
        >
          View website
          <UIcon
            name="i-lucide-external-link"
            class="size-4 text-primary transition-all opacity-40 group-hover:opacity-100"
          />
        </UButton>
      </template>
    </UPageCard>
  </div>
</template>
