<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content/dist/runtime/types'

const props = defineProps<{
  page: ParsedContent
}>()

const viewLink = computed(() => {
  return (`https://github.com/vernaillen/vernaillen.dev/tree/master/content/${props.page._file}`)
})

const lastUpdated = ref()
const { data: gitHubData } = await useLazyFetch('/api/github', {
  method: 'post',
  body: JSON.stringify({
    filename: props.page._file
  })
})
function updateGH (ghData: any) {
  if (ghData && ghData[0] && ghData[0].commit.author.date) {
    lastUpdated.value = longDateFormat(ghData[0].commit.author.date)
  }
}
watch(gitHubData, (newGHData) => {
  if (newGHData) { updateGH(newGHData) }
})
onMounted(() => {
  updateGH(gitHubData.value)
})
</script>

<template>
  <div class="mx-2">
    <NuxtLink :href="viewLink" target="_blank" aria-label="Open source of this page on Github">
      <UIcon name="i-mdi-github" class="w-4 h-4 -mb-[3px] ml-1 mr-2" />
    </NuxtLink>
    last updated on&nbsp;
    <NuxtLink
      :href="viewLink"
      target="_blank"
      aria-label="Open source of this page on Github"
    >
      <UIcon
        v-show="!lastUpdated"
        name="i-uil-spinner-alt"
        class="animate-spin w-4 h-4 -mb-[3px] "
      />
      {{ lastUpdated }}
    </NuxtLink>
  </div>
</template>
