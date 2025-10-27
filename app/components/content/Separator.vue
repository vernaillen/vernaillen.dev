<script setup lang="ts">
const imgRef = ref<HTMLElement | null>(null)

useGsapAnimation(imgRef, {
  from: {
    opacity: 0.2,
    scaleY: 0.6
  }
})
</script>

<template>
  <USeparator
    :ui="{
      root: 'sm:mt-10 sm:mb-6 lg:mt-12 lg:mb-8'
    }"
  >
    <img
      ref="imgRef"
      src="/favicon.svg"
      class="w-10"
      alt="Vernaillen Logo"
      width="19"
      height="7"
    >
  </USeparator>
</template>
