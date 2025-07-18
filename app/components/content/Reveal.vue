<script setup lang="ts">
import { gsap } from 'gsap'

const reveal = useTemplateRef('reveal')

const props = defineProps<{
  x?: number
  y?: number
}>()

onMounted(() => {
  gsap.set(reveal.value, {
    x: props.x,
    y: props.y
  })
  if (reveal.value) {
    revealInView(reveal.value)
  }
})
</script>

<template>
  <div
    ref="reveal"
    class="opacity-20 translate-y-5"
  >
    <slot />
  </div>
</template>
