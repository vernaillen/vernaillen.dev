<script setup lang="ts">
import type { NavItem } from '@nuxt/content/dist/runtime/types'

const navigation = inject<Ref<NavItem[]>>('navigation', ref([]))

const links = [{
  label: 'Home',
  to: '/',
}, {
  label: 'Career',
  to: '/career',
}, {
  label: 'Projects',
  to: '/projects',
}, {
  label: 'Blog',
  to: '/blog',
}, {
  label: 'About',
  to: '/about',
}]
</script>

<template>
  <UHeader :links="links">
    <template #logo>
      <SvgoLogo class="w-28" />
    </template>

    <template #right>
      <UColorModeButton
        size="xs"
        color="primary"
        variant="soft"
        class="hidden lg:flex"
      />
      <WhatsAppLink
        nr="+32473344656"
        class="ml-1 sm:ml-2"
      />
      <UButton
        size="xs"
        variant="soft"
        icon="i-mdi-github"
        to="https://github.com/vernaillen/vernaillen.dev/"
        aria-label="Wouter Vernaillen's GitHub"
        target="_blank"
        class="ml-1 sm:ml-2"
      />
    </template>

    <template #panel>
      <UNavigationTree
        :links="mapContentNavigation(navigation)"
        :multiple="false"
        default-open
      />
    </template>
  </UHeader>
</template>
