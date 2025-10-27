<script setup lang="ts">
const parallaxRef = ref<HTMLElement | null>(null)

useGsapAnimation(parallaxRef, {
  to: {
    y: 100,
    scale: 0.9
  },
  whenVisible: true,
  start: 'top 70%',
  end: 'top 30%',
  scrub: 1
})
</script>

<template>
  <div ref="parallaxRef">
    <slot />
  </div>
</template>
