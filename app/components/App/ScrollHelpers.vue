<script setup lang="ts">
import gsap from 'gsap'

const backToTop = ref<HTMLDivElement | null>(null)
const scrollPos = ref(0)

onMounted(() => {
  gsap.set(backToTop.value, { y: 150 })
  gsap.to(backToTop.value, {
    y: -70,
    ease: 'elastic.out(0.15, 0.15)',
    scrollTrigger: {
      trigger: 'body',
      start: 'top -20%',
      end: 'top -20%',
      toggleActions: 'play none reverse none'
    }
  })
  window.addEventListener('scroll', () => {
    if (import.meta.client) {
      const h = document.documentElement,
        b = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight'

      scrollPos.value = (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)
    }
  })
})
const scrollToTop = () => {
  gsap.to(window, {
    duration: 1,
    scrollTo: { y: 0 },
    ease: 'expo.inOut'
  })
}
</script>

<template>
  <div
    ref="backToTop"
    class="back-to-top fixed right-8 bottom-[-40px] left-auto z-40"
  >
    <UButton
      class="items-center justify-center
          w-8 h-8 rounded-md cursor-pointer
          hover:shadow-signUp hover:bg-opacity-80
          shadow-lg"
      aria-label="Scroll to top"
      @click="scrollToTop"
    >
      <span class="w-3 h-3 border-t border-l dark:border-black border-white transform rotate-45 mt-[6px]" />
    </UButton>
  </div>
  <UProgress
    :model-value="Math.min(scrollPos * 100, 100)"
    :ui="{
      base: 'fixed bottom-[-3px]'
    }"
  />
</template>
