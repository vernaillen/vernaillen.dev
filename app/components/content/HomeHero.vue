<script setup lang="ts">
import { useTemplateRef } from 'vue'
import { gsap } from 'gsap'

const homeHero = useTemplateRef('homeHero')

onMounted(() => {
  gsap.timeline({
    scrollTrigger: {
      trigger: homeHero.value as gsap.DOMTarget,
      toggleActions: 'play play resume reverse',
      start: 'top top',
      // end: () => '+=' + (homeHero.value as HTMLElement).offsetHeight,
      end: 'bottom top',
      pin: true,
      anticipatePin: 1,
      markers: true
    }
  }).to(homeHero.value, {
    opacity: 0,
    y: 0,
    duration: 2,
    ease: 'power2.out'
  })
})
</script>

<template>
  <div ref="homeHero">
    <slot />
  </div>
</template>
