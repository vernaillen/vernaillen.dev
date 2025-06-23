<script setup lang="ts">
import type { PagesCollectionItem } from '@nuxt/content'

defineProps<{
  page: PagesCollectionItem | undefined
}>()
</script>

<template>
  <UPageHeader
    v-if="page"
    :title="page?.title"
    :description="page?.description"
  >
    <div class="flex items-center justify-start">
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
          class="rounded-full opacity-60 group-hover:opacity-70 transition-opacity duration-300"
        />
        Wouter Vernaillen
      </UButton>
    </div>
    <Separator class="mt-10 mb-4" />
  </UPageHeader>
</template>
