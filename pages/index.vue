<script setup lang="ts">
const { data: page } = await useAsyncData('index', () => queryContent('/').findOne())
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

useSeoMeta({
  title: page.value.title,
  ogTitle: page.value.title,
  description: page.value.description,
  ogDescription: page.value.description
})
definePageMeta({
  layout: 'home'
})
</script>

<template>
  <div v-if="page">
    <ULandingHero :title="page.hero.title" :description="page.hero.description" :links="page.hero.links">
      <div class="absolute inset-0 z-[-1] [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]" />

      <template #headline>
        <UBadge v-if="page.hero.headline" variant="subtle" size="lg" class="relative rounded-lg font-semibold">
          {{ page.hero.headline.label }}
        </UBadge>
      </template>
    </ULandingHero>

    <ULandingSection
      v-for="(section, index) in page.sections"
      :key="index"
      :title="section.title"
      :description="section.description"
      :align="section.align"
      :features="section.features"
      :ui="{ container: 'lg:items-start' }"
    >
      <div class="bg-gray-900/5 dark:bg-white/5 ring-1 ring-inset ring-gray-900/10 dark:ring-white/10 rounded-xl lg:-m-4 p-4 align-top content-start">
        <div
          class="rounded-lg relative overflow-hidden border border-dashed border-gray-900/10 dark:border-white/10"
          :class="section.imageAspectRatio ? section.imageAspectRatio : 'aspect-w-16 aspect-h-9'"
        >
          <NuxtLink v-if="section.url" :to="section.url" target="_blank" :aria-label="section.title">
            <NuxtImg :src="section.image" format="webp" :alt="section.title" class="opacity-95 hover:opacity-100 hover:scale-[103%] transform transition-all duration-500" />
          </NuxtLink>
          <NuxtImg v-else :alt="section.title" format="webp" :src="section.image" class="opacity-95 hover:opacity-100 hover:scale-[103%] transform transition-all duration-500" />
        </div>
      </div>
    </ULandingSection>

    <ULandingSection :title="page.features.title" :description="page.features.description">
      <UPageGrid>
        <ULandingCard v-for="(item, index) in page.features.items" :key="index" v-bind="item" />
      </UPageGrid>
    </ULandingSection>

    <ULandingSection :headline="page.testimonials.headline" :title="page.testimonials.title" :description="page.testimonials.description">
      <UPageColumns>
        <div v-for="(testimonial, index) in page.testimonials.items" :key="index" class="break-inside-avoid">
          <ULandingTestimonial v-bind="testimonial" class="bg-gray-100/50 dark:bg-gray-800/50" />
        </div>
      </UPageColumns>
    </ULandingSection>
  </div>
</template>
