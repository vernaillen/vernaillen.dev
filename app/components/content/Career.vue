<script setup lang="ts">
import type { TimelineItem } from '@nuxt/ui'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

defineProps<{
  steps: TimelineItem[]
}>()

const timelineContainer = ref<HTMLElement | null>(null)
const active = ref(0)

// Note: This is for demonstration purposes only. Don't do this at home.
onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)

  gsap.utils.toArray('.timeline-step').forEach((step, index) => {
    gsap.to(step as HTMLElement, {
      scrollTrigger: {
        trigger: step as HTMLElement,
        start: 'top 90%',
        end: 'top 40%',
        toggleActions: 'play play resume reverse',
        scrub: true
      },
      opacity: 1,
      duration: 0.5,
      onStart: () => {
        active.value = index
      },
      onReverseComplete: () => {
        active.value = index
      }
    })
  })
  gsap.utils.toArray('.timeline-step div[role="separator"]').forEach((separator) => {
    gsap.set(separator as HTMLElement, {
      opacity: 0
    })
    gsap.to(separator as HTMLElement, {
      scrollTrigger: {
        trigger: separator as HTMLElement,
        start: 'top 80%',
        end: 'top 30%',
        toggleActions: 'play pause resume reset',
        scrub: true
      },
      height: '100%',
      opacity: 0.7,
      duration: 1,
      delay: 1
    })
  })
})
</script>

<template>
  <div ref="timelineContainer">
    <UTimeline
      v-model="active"
      :ui="{
        title: 'text-xl text-primary font-bold py-3',
        item: 'timeline-step opacity-20 gap-1 sm:gap-2 md:gap-3 sm:even:flex-row-reverse sm:even:-translate-x-[calc(100%-2rem)] sm:even:text-right sm:even:even-item',
        separator: 'opacity-0 h-0'
      }"
      :default-value="0"
      class="sm:translate-x-[calc(100%-1rem)] w-full sm:w-1/2 gap-1"
      :items="steps"
    >
      <template #description="{ item }">
        <career-text-line
          :text="item.project"
          :link="item.projectUrl"
          icon="i-ix-project"
          :place="item.place"
          :index="0"
        />
        <career-text-line
          :text="item.role"
          icon="i-carbon-user-role"
          :place="item.place"
          :index="1"
        />
        <career-text-line
          :text="item.stack"
          icon="i-carbon-code"
          :place="item.place"
          :index="2"
        />
        <career-text-line
          :text="item.contract"
          icon="i-hugeicons-cap"
          :place="item.place"
          :index="3"
        />
      </template>
      <template #indicator="{ item }">
        <div
          class="company-img bg-primary-500 drop-shadow-md hover:drop-shadow-lg shadow-light-400 flex items-center justify-center rounded-full overflow-hidden"
        >
          <TheLazyImage
            v-if="item.imageUrl"
            :src="item.imageUrl"
            :alt="item.project"
            format="webp"
            :width="34"
            :height="34"
            class="rounded-full"
          />
        </div>
      </template>
    </UTimeline>
  </div>
</template>

<style>
.even-item {
  background-color: red;
}
</style>
