<script setup lang="ts">
import { gsap } from 'gsap'

const props = defineProps<{
  text: string
  link?: string
  icon: string
  place: 'left' | 'right'
  index: number
}>()

const line = ref<HTMLElement>()

onMounted(() => {
  gsap.to(line.value, {
    scrollTrigger: {
      trigger: line.value,
      start: 'top 85%',
      end: 'top 30%',
      toggleActions: 'play play resume reverse'
    },
    opacity: 1,
    x: 0,
    duration: 0.6,
    delay: 0.05 * props.index,
    ease: 'sine.inOut'
  })
})
</script>

<template>
  <div
    ref="line"
    class="flex flex-row p-1 align-top items-start translate-x-5 opacity-0"
    :class="{ 'sm:justify-end sm:items-end sm:-translate-x-5': place === 'left' }"
  >
    <div
      class="flex items-start"
      :class="{ 'sm:order-last sm:ml-2': place === 'left' }"
    >
      <UIcon
        :name="icon"
        class="w-4 h-4 mr-2"
      />
    </div>
    <div>
      <NuxtLink
        v-if="link"
        :to="link"
        target="_blank"
        class="text-primary-500"
      >
        {{ text }}
      </NuxtLink>
      <span v-else>{{ text }}</span>
    </div>
  </div>
</template>
