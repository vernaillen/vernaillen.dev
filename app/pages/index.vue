<script setup lang="ts">
import gsap from 'gsap'

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
onMounted(() => {
  const scaleAnimations = gsap.utils.toArray('.scaleAnimation')
  scaleAnimations.forEach((an) => {
    useGsap.from(an, {
      scrollTrigger: {
        trigger: an,
        start: 'top bottom',
        end: 'bottom bottom',
        scrub: true,
        toggleActions: 'play pause reverse play'
      },
      scale: 0.5
    })
  })
})
</script>

<template>
  <div
    v-if="page"
    class="slide-enter-content"
  >
    <ULandingHero
      :title="page.hero.title"
      :description="page.hero.description"
      :links="page.hero.links"
    >
      <template #headline>
        <UBadge
          v-if="page.hero.headline"
          id="hero-badge"
          variant="subtle"
          size="lg"
          class="relative rounded-lg font-semibold slide-enter slide-enter-stage8"
        >
          {{ page.hero.headline.label }}
        </UBadge>
      </template>
    </ULandingHero>

    <ULandingSection
      v-for="(section, index) in page.sections"
      :key="index"
      :title="section.title"
      :description="section.description"
      :links="section.links"
      :align="section.align"
      :features="section.features"
      :ui="{
        wrapper: `homeLandingSection${index}`,
        container: 'lg:items-start'
      }"
    >
      <div class="scaleAnimation h-full">
        <NuxtLink
          v-if="section.url"
          :to="section.url"
          target="_blank"
          :aria-label="section.title"
        >
          <LazyImage
            v-if="section.image"
            :src="section.image"
            :url="section.url"
            :alt="section.title"
            :width="558"
            :height="352"
            show-ring
          />
        </NuxtLink>
        <LazyImage
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

    <ULandingSection
      :title="page.features.title"
      :description="page.features.description"
    >
      <UPageGrid
        :ui="{
          wrapper: 'scaleAnimation'
        }"
      >
        <ULandingCard
          v-for="(item, index) in page.features.items"
          :key="index"
          v-bind="item"
        />
      </UPageGrid>
    </ULandingSection>

    <ULandingSection
      :headline="page.testimonials.headline"
      :title="page.testimonials.title"
      :description="page.testimonials.description"
    >
      <UPageColumns
        :ui="{
          wrapper: 'scaleAnimation'
        }"
      >
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
  </div>
</template>
