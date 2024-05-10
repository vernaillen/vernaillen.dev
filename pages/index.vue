<script setup lang="ts">
const { data: page } = await useAsyncData('index', () => queryContent('/').findOne())
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

useSeoMeta({
  title: 'Wouter Vernaillen: Freelance Full Stack Developer',
  ogTitle: 'Wouter Vernaillen: Freelance Full Stack Developer',
  description: page.value.description,
  ogDescription: page.value.description,
})
defineOgImageComponent('Vernaillen', {
  title: 'Wouter Vernaillen',
  subTitle: 'Freelance Full Stack Developer',
  description: page.value.description,
})
definePageMeta({
  layout: 'home',
  colorMode: 'dark',
})
onMounted(() => {
  for (let i = 0; i < 8; i++) {
    useGsap.from(`.scaleAnimation${i}`, {
      scrollTrigger: {
        trigger: `.scaleAnimation${i}`,
        start: 'top bottom',
        end: 'bottom center',
        scrub: true,
        toggleActions: 'play pause reverse play',
      },
      x: 0,
      y: 0,
      scale: 0.5,
    })
  }
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
          variant="subtle"
          size="lg"
          class="relative rounded-lg font-semibold slide-enter slide-enter-stage1"
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
        wrapper: `scaleAnimation${index * 2} homeLandingSection${index}`,
        container: 'lg:items-start',
      }"
    >
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
    </ULandingSection>

    <ULandingSection
      :title="page.features.title"
      :description="page.features.description"
      :ui="{
        base: 'scaleAnimation4',
      }"
    >
      <UPageGrid
        :ui="{
          wrapper: 'scaleAnimation5',
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
      :ui="{
        base: 'scaleAnimation6',
      }"
    >
      <UPageColumns
        :ui="{
          wrapper: 'scaleAnimation7',
        }"
      >
        <div
          v-for="(testimonial, index) in page.testimonials.items"
          :key="index"
          class="break-inside-avoid"
        >
          <ULandingTestimonial
            v-bind="testimonial"
            class="bg-gray-100/50 dark:bg-gray-800/50"
          />
        </div>
      </UPageColumns>
    </ULandingSection>
  </div>
</template>
