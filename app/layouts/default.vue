<script setup lang="ts">
const pageHooks = usePageHooks()
</script>

<template>
  <UMain class="scrollContainer">
    <div id="top" />
    <UPage
      class="transition-all duration-300"
      :class="pageHooks.hidePageContent.value ? 'opacity-20 blur-sm' : 'opacity-100 blur-none'"
    >
      <UContainer>
        <slot />
      </UContainer>
    </UPage>
  </UMain>
</template>
