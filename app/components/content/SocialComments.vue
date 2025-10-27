<script setup lang="ts">
import type { PagesCollectionItem } from '@nuxt/content'

defineProps<{
  page: PagesCollectionItem
}>()
</script>

<template>
  <div
    v-if="page.social"
    class="w-full pt-3 text-sm text-gray-400 dark:text-gray-400 prose dark:prose-invert"
  >
    <UIcon
      name="i-mdi-comment-multiple-outline"
      class="comments-icon w-4 h-4 -mb-[3px] mr-1"
    />
    comment on
    <UButton
      v-for="social, index in page.social"
      :key="index"
      :to="social.url"
      :icon="social.icon"
      variant="outline"
      size="xs"
      target="_blank"
      class="mr-1 ring-primary-500/20"
    />
  </div>
</template>
