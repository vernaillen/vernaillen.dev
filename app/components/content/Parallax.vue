<template>
  <div v-gsap.whenVisible.to="{ y: 100, start: 'top 70%', end: 'top 30%', scrub: 1, scale: 0.9 }">
    <slot />
  </div>
</template>
