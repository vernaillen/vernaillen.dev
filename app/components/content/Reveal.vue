<template>
  <div v-gsap.whenVisible.delay-100.from="{ opacity: 0, scale: 0.8 }">
    <slot />
  </div>
</template>
