<script setup lang="ts">
const props = defineProps<{
  src: string
  alt: string
  width?: number
  height?: number
}>()
console.log(props)
</script>

<template>
  <LazyImage
    :src
    :alt
    :width
    :height
    format="webp"
  />
</template>
