<script setup lang="ts">
import { gsap } from 'gsap'

const reveal = useTemplateRef('reveal')

const props = defineProps<{
  x?: string
  y?: string
}>()

onMounted(() => {
  gsap.set(reveal.value, {
    x: props.x ? `${props.x}px` : '0',
    y: props.y ? `${props.y}px` : '0'
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
