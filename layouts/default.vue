<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content/dist/runtime/types'

const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation(), { default: () => [] })
const { data: files } = useLazyFetch<ParsedContent[]>('/api/search.json', { default: () => [], server: false })

provide('navigation', navigation)

onMounted(() => {
  useAnime({
    targets: 'h1',
    translateX: [-10, 0],
  })
  useAnime({
    targets: '.svg-right svg',
    translateX: [50, 0],
  })
})
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
    <span class="svg-right absolute right-0 top-10 z-[-1] animate__animated animate__fadeIn">
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
