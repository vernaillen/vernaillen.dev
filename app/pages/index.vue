<script setup lang="ts">
import { Motion, useInView, useScroll } from 'motion-v'

const { data: page } = await useAsyncData('index', () => queryContent('/').findOne())
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

useSeoMeta({
  title: 'Wouter Vernaillen: Freelance Full Stack Developer',
  ogTitle: 'Wouter Vernaillen: Freelance Full Stack Developer',
  description: page.value.description,
  ogDescription: page.value.description
})
defineOgImageComponent('Vernaillen', {
  title: 'Wouter Vernaillen',
  subTitle: 'Freelance Full Stack Developer',
  description: page.value.description
})
definePageMeta({
  layout: 'home',
  colorMode: 'dark'
})

const { scrollY } = useScroll()
useMotionValueEvent(scrollY, 'change', (latest) => {
  console.log('Page scroll: ', latest)
})
const homeLandingSection3 = ref<HTMLElement | null>(null)
const section3InView = useInView(homeLandingSection3 as Ref<Element | Element>)
const homeLandingSection4 = ref<HTMLElement | null>(null)
const section4InView = useInView(homeLandingSection4 as Ref<Element | Element>)

const getRandomTransformOrigin = () => {
  const value = (16 + 40 * Math.random()) / 100
  const value2 = (15 + 36 * Math.random()) / 100
  return {
    originX: value,
    originY: value2
  }
}
const getRandomDelay = () => -(Math.random() * 0.7 + 0.05)
const randomDuration = () => Math.random() * 0.07 + 0.23
</script>

<template>
  <div
    v-if="page"
    class="slide-enter-content"
  >
    <ULandingHero
      :title="page.hero.title"
      :description="page.hero.description"
    >
      <template #title>
        <Motion
          as="h1"
          class="font-bold tracking-tight text-gray-900 dark:text-white text-3xl sm:text-5xl md:text-6xl"
          :initial="{ opacity: 0, scale: 0.8 }"
          :animate="{ opacity: 1, scale: 1 }"
          :transition="{ duration: 0.6, ease: 'easeInOut' }"
        >
          {{ page.hero.title }}
        </Motion>
      </template>
      <template #headline>
        <Motion
          :initial="{ opacity: 0, scale: 0.5 }"
          :animate="{ opacity: 1, scale: 1 }"
          :transition="{ duration: 0.3, ease: 'easeInOut' }"
        >
          <UBadge
            v-if="page.hero.headline"
            id="hero-badge"
            variant="subtle"
            size="lg"
            class="relative rounded-lg font-semibold slide-enter slide-enter-stage8"
          >
            {{ page.hero.headline.label }}
          </UBadge>
        </Motion>
      </template>
      <template #links>
        <Motion
          v-for="(link, index) in page.hero.links"
          :key="index"
          as="div"
          :animate="{
            rotate: index % 2 === 0 ? [-1, 1.3, 0] : [1, -1.4, 0],
            transition: {
              delay: getRandomDelay(),
              duration: randomDuration(),
              repeat: 5
            }
          }"
          :style="getRandomTransformOrigin()"
        >
          <UButton
            v-bind="link"
            @click="link.click"
          />
        </Motion>
      </template>
    </ULandingHero>

    <div class="mt-40">
      <HomeSection
        v-for="(section, index) in page.sections"
        :key="index"
        :section="section"
      />
    </div>

    <div ref="homeLandingSection3">
      <Motion
        ref="homeLandingSection3"
        as="div"
        class="h-full"
        :initial="{ opacity: 0.5, y: 200, scale: 0.8 }"
        :animate="{
          opacity: section3InView ? 1 : 0.5,
          y: section3InView ? 0 : 200,
          scale: section3InView ? 1 : 0.8
        }"
        :transition="{ duration: 1 }"
      >
        <ULandingSection
          :title="page.features.title"
          :description="page.features.description"
        >
          <UPageGrid>
            <ULandingCard
              v-for="(item, index) in page.features.items"
              :key="index"
              v-bind="item"
            />
          </UPageGrid>
        </ULandingSection>
      </Motion>
    </div>

    <div ref="homeLandingSection4">
      <Motion
        as="div"
        :initial="{ opacity: 0.5, y: 200, scale: 0.8 }"
        :animate="{
          opacity: section4InView ? 1 : 0.5,
          y: section4InView ? 0 : 200,
          scale: section4InView ? 1 : 0.8
        }"
        :transition="{ duration: 1 }"
      >
        <ULandingSection
          :headline="page.testimonials.headline"
          :title="page.testimonials.title"
          :description="page.testimonials.description"
        >
          <UPageColumns>
            <div
              v-for="(testimonial, index) in page.testimonials.items"
              :key="index"
              class="break-inside-avoid"
            >
              <UCard>
                <p class="text-gray-600 dark:text-gray-300">
                  "{{ testimonial.quote }}"
                </p>
                <div
                  v-if="testimonial.author"
                  class="flex items-center gap-3 mt-6 relative"
                >
                  <NuxtImg
                    v-if="testimonial.author.avatar"
                    :src="testimonial.author.avatar.src"
                    :alt="'Avatar of ' + testimonial.author.name"
                    size="md"
                    width="40"
                    height="40"
                    class="rounded-full"
                    loading="lazy"
                  />
                  <div>
                    <p
                      v-if="testimonial.author.name"
                      class="font-semibold text-gray-900 dark:text-white text-sm"
                    >
                      {{ testimonial.author.name }}
                    </p>
                    <p
                      v-if="testimonial.author.description"
                      class="text-gray-500 dark:text-gray-400 text-sm"
                    >
                      {{ testimonial.author.description }}
                    </p>
                  </div>
                </div>
              </UCard>
            </div>
          </UPageColumns>
        </ULandingSection>
      </Motion>
    </div>
  </div>
</template>
