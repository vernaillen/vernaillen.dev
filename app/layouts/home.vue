<script setup lang="ts">
import { Motion } from 'motion-v'
import { useGsap } from '#gsap'

const { data: navigation } = await useAsyncData('navigation', () => queryCollectionNavigation('pages'), { default: () => [] })

provide('navigation', navigation)

const { scrollYProgress } = useScroll()
const scrollYProgressInverse = ref(1)

useMotionValueEvent(scrollYProgress, 'change', (latest) => {
  if (latest < 0.2) {
    scrollYProgressInverse.value = 1 - (latest * 3)
  } else {
    scrollYProgressInverse.value = 0.4
  }
})

onMounted(() => {
  useGsap.to('.svg-left', {
    scrollTrigger: {
      trigger: 'main',
      start: 'top top',
      end: '+=1000',
      scrub: true,
      toggleActions: 'play pause reverse reset'
    },
    y: 300,
    scale: 0.3,
    opacity: 0.3,
    duration: 1
  })
})
</script>

<template>
  <div>
    <HeaderComponent />

    <UMain>
      <slot />
    </UMain>

    <FooterComponent />
    <div class="svg-right fixed top-0 right-0 left-1/2 lg:left-2/3 pl-8 sm:pl-14 z-[-1] overflow-hidden">
      <Motion
        :initial="{ opacity: 0 }"
        :animate="{ opacity: 1 }"
        :transition="{ duration: 1, ease: 'easeInOut' }"
        :style="{ opacity: scrollYProgressInverse }"
      >
        <SvgoHomeRight class="w-full h-screen" />
      </Motion>
    </div>
    <div
      class="svg-left absolute
        top-[470px] -left-20 scale-75
        sm:-left-10 sm:scale-90
        md:left-10 md:scale-100
        z-[-1] opacity-50 block overflow-hidden"
    >
      <SvgoHomeLeft class="w-full" />
    </div>
  </div>
</template>
