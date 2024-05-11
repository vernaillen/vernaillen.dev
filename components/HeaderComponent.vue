<script setup lang="ts">
const links = [
  {
    label: 'Home',
    to: '/'
  },
  ...useAppConfig().navigation
]
</script>

<template>
  <UHeader :links="links">
    <template #logo>
      <SvgoLogo
        class="w-28 cursor-pointer"
        @click="$route.path == '/' ? reloadNuxtApp({ path: '/', ttl: 100 }) : $router.push('/')"
      />
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
  </UHeader>
</template>
