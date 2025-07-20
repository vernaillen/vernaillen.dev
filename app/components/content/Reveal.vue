<script setup lang="ts">
const reveal = useTemplateRef('reveal')

const props = withDefaults(defineProps<{
  class?: string
}>(), {
  class: 'translate-y-5'
})

onMounted(() => {
  if (reveal.value) {
    revealInView(reveal.value)
  }
})
</script>

<template>
  <div
    ref="reveal"
    :class="props.class"
  >
    <slot />
  </div>
</template>
