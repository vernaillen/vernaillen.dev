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
        start: 'top 80%',
        end: 'top 40%',
        toggleActions: 'play play resume reverse'
      },
      scaleY: 0.8,
      y: 6,
      opacity: 0.3,
      duration: 0.4,
      stagger: 0.3 / splitText.chars.length,
      ease: 'elastic.easeOut'
    })
  }
})
</script>

<template>
  <span
    ref="anim"
    class="anim inline-block opacity-30 scale-y-80 translate-y-[6px]"
  >
    <slot />
  </span>
</template>

<style>
.anim div {
  display:inline-block;
}
</style>
