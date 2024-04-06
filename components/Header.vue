<script setup lang="ts">
import type { NavItem } from '@nuxt/content/dist/runtime/types'

const navigation = inject<Ref<NavItem[]>>('navigation', ref([]))

const links = [{
  label: 'Docs',
  to: '/docs'
}, {
  label: 'Pricing',
  to: '/pricing'
}, {
  label: 'Blog',
  to: '/blog'
}]
</script>

<template>
  <UHeader :links="links">
    <template #logo>
      <SvgoLogo class="w-28" />
    </template>

    <template #right>
      <UButton
        size="xs"
        variant="soft"
        icon="i-mdi-github"
        to="https://github.com/vernaillen/vernaillen.dev/"
        target="_blank"
        class="ml-1 sm:ml-2"
      />
    </template>

    <template #panel>
      <UNavigationTree :links="mapContentNavigation(navigation)" default-open />
    </template>
  </UHeader>
</template>
