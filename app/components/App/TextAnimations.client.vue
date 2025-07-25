<script setup lang="ts">
import gsap from 'gsap'
import SplitText from 'gsap/SplitText'

onMounted(() => {
  gsap.utils.toArray('h1, h2').forEach((anim) => {
    const splitText = new SplitText(anim as HTMLElement, { type: 'chars' })
    gsap.from(splitText.chars, {
      scrollTrigger: {
        trigger: anim as HTMLElement,
        start: 'top 85%',
        end: 'top 30%',
        toggleActions: 'play play resume reverse'
      },
      scaleY: (anim as HTMLElement).tagName === 'H1' ? 0.8 : 1,
      y: (anim as HTMLElement).tagName === 'H1' ? 3 : 0,
      opacity: 0.4,
      duration: 0.4,
      stagger: 0.4 / splitText.chars.length,
      ease: 'sine'
    })
  })
  gsap.utils.toArray('.pageContent p, .pageContent ul, .pageContent ol').forEach((element) => {
    gsap.from(element as HTMLElement, {
      scrollTrigger: {
        trigger: element as HTMLElement,
        start: 'top 95%',
        end: 'top 10%',
        toggleActions: 'play play resume reverse'
      },
      opacity: 0.1,
      duration: 0.5,
      delay: 0.05 * (element as HTMLElement).dataset.indexNumber
    })
  })
})
</script>

<template>
  <div class="hidden">
    Text animations loaded
  </div>
</template>
