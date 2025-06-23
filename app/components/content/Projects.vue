<script setup lang="ts">
import { gsap } from 'gsap'

defineProps<{
  projects: {
    title: string
    description: string
    to: string
    target: string
    categories: string[]
    image: {
      src: string
      alt: string
    }
  }[]
}>()

const handleClick = (url: string) => {
  window.open(url, '_blank')
}
const sections = ref<HTMLElement[]>([])
const outerWrappers = ref<HTMLElement[]>([])

onMounted(() => {
  sections.value = gsap.utils.toArray('.project-card')
  outerWrappers.value = gsap.utils.toArray('.project__outer')

  gsap.utils.toArray('.project-card').forEach((section) => {
    gsap.timeline({
      scrollTrigger: {
        trigger: section as gsap.DOMTarget,
        // start: 'center center',
        start: 'top 130px',
        end: () => '+=' + (section as HTMLElement).offsetHeight,
        // end: 'center top',
        scrub: true,
        pin: true,
        anticipatePin: 1
      },
      defaults: { ease: 'circle.inOut' }
    })
    /* tl.fromTo((section as HTMLElement).querySelector('.project__outer') as gsap.TweenTarget, {
      y: 0,
      opacity: 1
    }, {
      y: -100,
      duration: 2,
      opacity: 0.5
    }) */
  })
})
</script>

<template>
  <UPageSection
    :ui="{
      container: '!p-0 pageContent relative'
    }"
  >
    <div
      v-for="(project, index) in projects"
      :key="index"
      class="project-card mb-[500px] lg:mb-0"
    >
      <UPageCard
        :description="project.description"
        :to="project.url"
        orientation="horizontal"
        variant="soft"
        class="group project__outer"
        :reverse="index % 2 === 1"
        :ui="{
          root: 'bg-elevated',
          container: 'gap-x-0 cursor-pointer p-0 sm:p-0',
          wrapper: 'max-lg:order-last',
          title: 'text-xl my-2',
          description: 'text-base my-2'
        }"
        @click="handleClick(project.to)"
      >
        <template #leading>
          <UBadge
            v-for="category in project.categories"
            :key="category"
            :label="category"
            variant="subtle"
            class="mr-2 mb-2"
            size="sm"
          />
        </template>
        <template #title>
          <h2 class="text-2xl font-bold">
            {{ project.title }}
          </h2>
        </template>
        <template #description>
          <p class="mt-4">
            {{ project.description }}
          </p>
        </template>
        <template #footer>
          <UButton
            v-if="project.to"
            :to="project.to"
            target="_blank"
            class="text-primary flex items-center"
            color="neutral"
            variant="soft"
          >
            View website
            <UIcon
              name="i-lucide-external-link"
              class="size-4 text-primary transition-all opacity-40 group-hover:opacity-100"
            />
          </UButton>
        </template>
        <div
          class="relative overflow-hidden"
          :class="index % 2 === 0 ? 'rounded-t-lg lg:rounded-tl-none lg:rounded-r-lg' : 'rounded-t-lg lg:rounded-tr-none lg:rounded-l-lg'"
        >
          <NuxtImg
            :src="project.image.src"
            :alt="project.image.alt"

            class="object-cover w-full h-54 lg:h-72 group-hover:scale-105 transition-all duration-300"
          />
        </div>
      </UPageCard>
    </div>
  </UPageSection>
</template>
