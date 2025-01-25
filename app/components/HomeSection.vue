<script setup lang="ts">
import { useInView, Motion } from 'motion-v'

defineProps<{
  section: {
    title: string
    description: string
    image: string
    url: string
    links: {
      label: string
      variant: string
      trailingIcon: string
      size: string
      to: string
    }[]
    align: 'left' | 'right'
    features: {
      name: string
      description: string
      icon: string
    }[]
  }
}>()

const homeLandingSection = ref<HTMLElement | null>(null)
const sectionInView = useInView(homeLandingSection as Ref<Element | Element>)
</script>

<template>
  <div ref="homeLandingSection">
    <Motion
      ref="homeLandingSection"
      as="div"
      class="h-full"
      :initial="{ opacity: 0.5, y: 100, scale: 0.8 }"
      :animate="{
        opacity: sectionInView ? 1 : 0.5,
        y: sectionInView ? 0 : 100,
        scale: sectionInView ? 1 : 0.8
      }"
      :transition="{ duration: 1 }"
    >
      <ULandingSection
        :title="section.title"
        :description="section.description"
        :links="section.links"
        :align="section.align"
        :features="section.features"
        :ui="{
          container: 'lg:items-start'
        }"
      >
        <div class="h-full">
          <NuxtLink
            v-if="section.url"
            :to="section.url"
            target="_blank"
            :aria-label="section.title"
          >
            <TheLazyImage
              v-if="section.image"
              :src="section.image"
              :url="section.url"
              :alt="section.title"
              :width="558"
              :height="352"
              show-ring
            />
          </NuxtLink>
          <TheLazyImage
            v-else
            :src="section.image"
            :url="section.url"
            :alt="section.title"
            :width="558"
            :height="352"
            show-ring
          />
        </div>
      </ULandingSection>
    </Motion>
  </div>
</template>
