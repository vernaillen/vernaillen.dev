<script setup lang="ts">
import { useTemplateRef } from 'vue'
import gsap from 'gsap'
import SplitText from 'gsap/SplitText'

const textAnim = useTemplateRef('anim')

onMounted(() => {
  gsap.registerPlugin(SplitText)

  if (textAnim.value) {
    gsap.set(textAnim.value, { opacity: 1, scaleY: 1, y: 0 })
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
      delay: 0.2,
      opacity: 0.3,
      duration: 0.6,
      stagger: 0.7 / splitText.chars.length,
      ease: 'elastic.easeOut'
    })
  }
})
</script>

<template>
  <span
    ref="anim"
    class="anim inline-block opacity-30 scale-90 translate-y-[3px]"
  >
    <slot />
  </span>
</template>

<style>
.anim div {
  display:inline-block;
}
</style>
