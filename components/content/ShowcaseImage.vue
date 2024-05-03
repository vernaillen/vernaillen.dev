<script setup lang="ts">
defineProps<{
  image: string
  alt: string
  url?: string
  cssClass?: string
}>()
</script>

<template>
  <div
    class="ring-1 ring-inset ring-gray-900/10 dark:ring-white/10 rounded-xl p-2 align-top content-start"
    :class="cssClass"
  >
    <div class="rounded-lg relative overflow-hidden h-full w-full border border-dashed border-gray-900/10 dark:border-white/10">
      <NuxtLink
        v-if="url"
        :to="url"
        target="_blank"
        :aria-label="alt"
      >
        <LazyImage
          :src="image"
          :alt="alt"
          :width="558"
          :height="352"
          :opacity="0.8"
          fit="cover"
          class="m-0 object-top w-full h-full"
        />
      </NuxtLink>
      <LazyImage
        v-else
        :src="image"
        :alt="alt"
        :width="558"
        :height="352"
        :opacity="0.8"
        fit="cover"
        class="m-0 object-top w-full h-full"
      />
    </div>
  </div>
</template>
