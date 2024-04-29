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
      <UContainer>
        <slot />
      </UContainer>
    </UMain>

    <FooterComponent />
    <span class="absolute top-10 left-0 z-[-1] animate__animated animate__fadeIn">
      <SvgoBackgroundLeft1 class="w-full" />
    </span>
    <span class="absolute right-0 top-10 z-[-1] animate__animated animate__fadeIn">
      <SvgoBackgroundRight1 class="w-full" />
    </span>
    <ClientOnly>
      <LazyUContentSearch
        :files="files"
        :navigation="navigation"
      />
    </ClientOnly>
  </div>
</template>
