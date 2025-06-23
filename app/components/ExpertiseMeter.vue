<script setup lang="ts">
import gsap from 'gsap'
import type { Technology } from '~~/types'

const props = defineProps<{
  technology: Technology
  index: number
}>()

const progress = ref(0)
onMounted(() => {
  gsap.to(progress, {
    value: props.technology.value,
    duration: 0.1,
    delay: props.index * 0.05
  })
})
</script>

<template>
  <div class="mb-3 flex items-center gap-2">
    <span
      v-gsap.from="reveal(index)"
      class="w-32 flex items-center gap-2"
    >
      <UIcon
        :name="technology.icon"
        class="w-6 h-6"
      />
      <span class="w-24">{{ technology.label }}</span>
    </span>
    <UProgress
      :model-value="Math.min(progress, 100)"
      color="primary"
      size="lg"
      :ui="{
        base: `bg-${technology.color}-500/20`,
        indicator: 'bg-primary-400 dark:bg-primary-600'
      }"
    />
  </div>
</template>
