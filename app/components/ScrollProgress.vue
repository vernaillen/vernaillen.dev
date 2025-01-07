<script setup lang="ts">
import { scroll } from 'motion'
import { animate } from 'motion/mini'

const progress = ref(null)
onMounted(() => {
  if (progress.value) scroll(animate(progress.value, { strokeDasharray: ['0,1', '1,1'] }))
})
</script>

<template>
  <svg
    width="40"
    height="40"
    viewBox="0 0 100 100"
  >
    <circle
      cx="40"
      cy="40"
      r="30"
      pathLength="1"
      class="bg"
    />
    <circle
      ref="progress"
      cx="40"
      cy="40"
      r="30"
      pathLength="1"
      class="progress"
    />
  </svg>
</template>

<style scoped>
svg {
  position: fixed;
  top: 75px;
  right: 8px;
  z-index: 1000;
}

svg circle {
  stroke-dashoffset: 0;
  stroke-width: 8%;
  fill: none;
}

svg .bg {
  stroke: rgba(156, 142, 27, 0.1);
}

svg .progress {
  stroke: rgba(156, 142, 27, 0.9);
  stroke-dasharray: 0, 1;
}
</style>
