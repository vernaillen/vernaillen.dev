<script setup lang="ts">
import type { Project } from '~/types'

defineProps<{
  projects: Project[]
}>()
</script>

<template>
  <UPageGrid orientation="horizontal">
    <Project
      v-for="(project, index) in projects"
      :key="index"
      :project="project"
      :index="index"
    />
  </UPageGrid>
</template>
