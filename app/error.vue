<script setup lang="ts">
import type { NuxtError } from '#app'

useSeoMeta({
  title: 'Page not found',
  description: 'We are sorry but this page could not be found.'
})

defineProps({
  error: {
    type: Object as PropType<NuxtError>,
    required: true
  }
})

useHead({
  htmlAttrs: {
    lang: 'en'
  }
})

const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation(), { default: () => [] })

provide('navigation', navigation)
</script>

<template>
  <div>
    <HeaderComponent />

    <UMain>
      <UContainer>
        <UPage>
          <UPageError :error="error" />
        </UPage>
      </UContainer>
      <div class="svg-right absolute top-0 right-0 left-1/2 lg:left-2/3 pl-8 sm:pl-14 z-[-1] overflow-hidden">
        <SvgoHomeRight class="w-full h-screen" />
      </div>
      <div class="svg-left absolute bottom-24 left-10 z-[-1] opacity-30 block overflow-hidden">
        <SvgoHomeLeft class="w-full" />
      </div>
    </UMain>

    <FooterComponent />

    <UNotifications />
    <div class="sticky right-0 bottom-14 z-[-1]">
      <SvgoFooter class="w-20" />
    </div>
  </div>
</template>
