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
        <NuxtImg
          :src="image"
          format="webp"
          :alt="alt"
          fit="cover"
          class="opacity-95 hover:opacity-100 hover:scale-[103%] transform transition-all duration-500 m-0 object-cover object-top w-full h-full "
        />
      </NuxtLink>
      <NuxtImg
        v-else
        :alt="alt"
        format="webp"
        :src="image"
        fit="cover"
        class="opacity-95 hover:opacity-100 hover:scale-[103%] transform transition-all duration-500 m-0 object-cover object-top w-full h-full"
      />
    </div>
  </div>
</template>
