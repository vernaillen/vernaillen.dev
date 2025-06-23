<script setup lang="ts">
withDefaults(defineProps<{
  x?: string
}
>(), {
  x: '0'
})
</script>

<template>
  <div v-gsap.whenVisible.delay-100.from="{ opacity: 0, scale: 0.8, x: Number(x) }">
    <slot />
  </div>
</template>
