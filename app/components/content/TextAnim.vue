<script setup lang="ts">
import { useTemplateRef } from 'vue'
import gsap from 'gsap'
import SplitText from 'gsap/SplitText'

const textAnim = useTemplateRef('anim')

onMounted(() => {
  if (textAnim.value) {
    gsap.to(textAnim.value, {
      opacity: 1,
      scaleY: 1,
      y: 0,
      duration: 0.5,
      ease: 'power2.inOut'
    })
    const splitText = new SplitText(textAnim.value, { type: 'chars' })
    gsap.from(splitText.chars, {
      scrollTrigger: {
        trigger: textAnim.value,
        start: 'top 70%',
        end: 'top 40%',
        toggleActions: 'play play resume reverse'
      },
      scaleY: 0.9,
      y: 3,
      opacity: 0.3,
      duration: 0.5,
      stagger: 0.7 / splitText.chars.length,
      ease: 'elastic.easeOut'
    })
  }
})
</script>

<template>
  <span
    ref="anim"
    class="anim inline-block opacity-30 scaleY-90"
  >
    <slot />
  </span>
</template>

<style>
.anim div {
  display:inline-block;
}
</style>
