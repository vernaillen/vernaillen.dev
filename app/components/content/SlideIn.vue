<script setup lang="ts">
const props = withDefaults(defineProps<{
  x?: string
}
>(), {
  x: '0'
})

const slideInRef = ref<HTMLElement | null>(null)

useGsapAnimation(slideInRef, {
  from: {
    opacity: 0,
    scale: 0.8,
    x: Number(props.x)
  },
  whenVisible: true,
  delay: 100
})
</script>

<template>
  <div ref="slideInRef">
    <slot />
  </div>
</template>
