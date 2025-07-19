<script setup lang="ts">
const pageHooks = usePageHooks()
</script>

<template>
  <UMain class="scrollContainer">
    <div id="top" />
    <UContainer
      class="transition-all duration-300"
      :class="pageHooks.blurPageContent.value ? 'opacity-20 blur-xs' : 'opacity-100 blur-none'"
    >
      <slot />
    </UContainer>
    <HomeBackground />
  </UMain>
</template>
