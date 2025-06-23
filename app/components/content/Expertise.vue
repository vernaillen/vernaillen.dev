<script setup lang="ts">
defineProps<{
  technologies: {
    label: string
    icon: string
    value: number
    color: string
    class: string
  }[]
}>()
</script>

<template>
  <div>
    <ExpertiseMeter
      v-for="technology, index in technologies"
      :key="index"
      :technology="technology"
      :index="index"
    />
  </div>
</template>
