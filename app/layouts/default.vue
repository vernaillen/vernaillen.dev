<script setup lang="ts">
const pageHooks = usePageHooks()
</script>

<template>
  <UMain class="scrollContainer">
    <div id="top" />
    <UPage
      class="transition-all duration-300"
      :class="pageHooks.blurPageContent.value ? 'opacity-20' : 'opacity-100'"
    >
      <UContainer>
        <slot />
      </UContainer>
    </UPage>
  </UMain>
</template>
