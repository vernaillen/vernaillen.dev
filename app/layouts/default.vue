<script setup lang="ts">
const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation(), { default: () => [] })

provide('navigation', navigation)
</script>

<template>
  <div>
    <HeaderComponent />

    <UMain>
      <UContainer>
        <slot />
      </UContainer>
    </UMain>

    <FooterComponent />
    <span class="svg-left absolute top-10 left-0 z-[-1]">
      <SvgoBackgroundLeft1 class="w-full" />
    </span>
    <span class="svg-right absolute right-0 top-10 z-[-1]">
      <SvgoBackgroundRight1 class="w-full" />
    </span>
  </div>
</template>
