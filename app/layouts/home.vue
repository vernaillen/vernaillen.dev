<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content/dist/runtime/types'

const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation(), { default: () => [] })
const { data: files } = useLazyFetch<ParsedContent[]>('/api/search.json', { default: () => [], server: false })

provide('navigation', navigation)
</script>

<template>
  <div>
    <HeaderComponent />

    <UMain>
      <slot />
    </UMain>

    <FooterComponent />
    <div class="svg-right fixed top-0 right-0 left-1/2 lg:left-2/3 pl-8 sm:pl-14 z-[-1] overflow-hidden">
      <SvgoHomeRight class="w-full h-screen" />
    </div>
    <div
      class="svg-left absolute
        top-[470px] -left-20 scale-75
        sm:-left-10 sm:scale-90
        md:left-10 md:scale-100
        z-[-1] opacity-50 block overflow-hidden"
    >
      <SvgoHomeLeft class="w-full" />
    </div>
    <ClientOnly>
      <LazyUContentSearch
        :files="files"
        :navigation="navigation"
      />
    </ClientOnly>
  </div>
</template>
