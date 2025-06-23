<script lang="ts" setup>
defineProps<{
  date: Date | string
}>()
</script>

<template>
  <NuxtTime
    :datetime="date"
    day="numeric"
    month="long"
    year="numeric"
    locale="en-BE"
    class="text-xs text-neutral-500 dark:text-neutral-400"
  />
</template>
