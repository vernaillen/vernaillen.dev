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
  gsap.set(line.value, {
    opacity: 0.5,
    x: props.place === 'left' ? -30 : 30
  })
  gsap.to(line.value, {
    scrollTrigger: {
      trigger: line.value,
      start: 'top 80%',
      end: 'top 30%',
      toggleActions: 'play play resume reverse'
    },
    opacity: 1,
    x: 0,
    duration: 0.5,
    delay: 0.02 * props.index,
    ease: 'sine.inOut'
  })
})
</script>

<template>
  <div
    ref="line"
    class="flex flex-row p-1 align-top items-start"
    :class="{ 'justify-end items-end': place === 'left' }"
  >
    <div
      class="flex items-start"
      :class="{ 'order-last ml-2': place === 'left' }"
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
