<script setup lang="ts">
defineProps<{
  src: string
  poster?: string
  autoplay?: boolean
  loop?: boolean
  muted?: boolean
  controls?: boolean
}>()
</script>

<template>
  <div class="flex items-center justify-center">
    <video
      :src="src"
      :poster="poster"
      :autoplay="autoplay"
      :loop="loop"
      :muted="muted"
      :controls="controls ?? true"
      class="w-full rounded-lg"
      playsinline
    >
      Your browser does not support the video tag.
    </video>
  </div>
</template>
