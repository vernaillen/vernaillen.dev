<script setup lang="ts">
import type { PagesCollectionItem } from '@nuxt/content'

defineProps<{
  page: PagesCollectionItem | undefined
}>()
</script>

<template>
  <UPageHeader
    v-if="page"
  >
    <template #title>
      <TextAnimHeader>{{ page?.title }}</TextAnimHeader>
    </template>
    <template #description>
      <Reveal class="opacity-50 translate-y-0">
        {{ page?.description }}
      </Reveal>
    </template>
    <Reveal class="flex items-center justify-start">
      <Date
        v-if="page.date"
        :date="page.date"
        class="mr-2"
      />
      <UButton
        v-if="page.isblogpost"
        to="/about"
        alt="Wouter Vernaillen"
        aria-label="Wouter Vernaillen"
        size="sm"
        variant="ghost"
        class="group"
      >
        <NuxtImg
          src="/images/avatarwouter.jpg"
          alt="Wouter Vernaillen"
          width="20"
          height="20"
          fit="cover"
          format="webp"
          class="rounded-full opacity-70 group-hover:opacity-90 transition-opacity duration-300"
        />
        Wouter Vernaillen
      </UButton>
    </Reveal>
    <Separator class="mt-10 mb-4" />
  </UPageHeader>
</template>
