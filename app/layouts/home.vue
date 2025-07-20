<script setup lang="ts">
const pageHooks = usePageHooks()
</script>

<template>
  <UMain class="scrollContainer">
    <div id="top" />
    <UContainer
      class="transition-all duration-300"
      :class="pageHooks.hidePageContent.value ? 'opacity-0' : 'opacity-100'"
    >
      <slot />
    </UContainer>
    <HomeBackground />
  </UMain>
</template>
