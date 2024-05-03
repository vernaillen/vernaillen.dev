<script setup lang="ts">
defineProps<{
  src: string
  alt: string
  width?: number
  height?: number
}>()
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
