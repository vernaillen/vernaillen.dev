<script setup lang="ts">
const pageHooks = usePageHooks()
</script>

<template>
  <UMain class="scrollContainer">
    <div id="top" />
    <UContainer :class="pageHooks.hidePageContent.value ? 'opacity-20 blur-lg' : 'opacity-100 blur-none'">
      <slot />
    </UContainer>
    <HomeBackground />
  </UMain>
</template>
