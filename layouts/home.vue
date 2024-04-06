<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content/dist/runtime/types'

const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation(), { default: () => [] })
const { data: files } = useLazyFetch<ParsedContent[]>('/api/search.json', { default: () => [], server: false })

provide('navigation', navigation)
</script>

<template>
  <div>
    <Header />

    <UMain>
      <slot />
    </UMain>

    <Footer />
    <div class="svg-right absolute top-0 right-0 left-1/2 lg:left-2/3 pl-8 sm:pl-14 z-[-1] overflow-hidden">
      <SvgoHomeRight class="w-full h-screen" />
    </div>
    <div class="svg-left absolute bottom-24 left-10 z-[-1] opacity-30 block overflow-hidden">
      <SvgoHomeLeft class="w-full" />
    </div>
    <ClientOnly>
      <LazyUContentSearch :files="files" :navigation="navigation" />
    </ClientOnly>
  </div>
</template>
