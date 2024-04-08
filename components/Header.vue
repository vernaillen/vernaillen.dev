<script setup lang="ts">
import type { NavItem } from '@nuxt/content/dist/runtime/types'

const navigation = inject<Ref<NavItem[]>>('navigation', ref([]))

const links = [{
  label: 'Home',
  to: '/'
}, {
  label: 'Career',
  to: '/career'
}, {
  label: 'Projects',
  to: '/projects'
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
        to="https://wa.me/32473344656"
        icon="i-logos-whatsapp-icon"
        variant="soft"
        target="_blank"
        aria-label="contact me on WhatsApp"
      />
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
      <UNavigationTree :links="mapContentNavigation(navigation)" :multiple="false" default-open />
    </template>
  </UHeader>
</template>
