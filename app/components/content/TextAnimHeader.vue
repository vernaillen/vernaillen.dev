<script setup lang="ts">
import { useTemplateRef } from 'vue'
import gsap from 'gsap'
import SplitText from 'gsap/SplitText'

const textAnim = useTemplateRef('anim')

const props = defineProps<{
  delay?: number
}>()

onMounted(() => {
  if (textAnim.value) {
    const splitText = new SplitText(textAnim.value as HTMLElement, { type: 'chars' })
    gsap.from(splitText.chars, {
      scrollTrigger: {
        trigger: textAnim.value as HTMLElement,
        start: 'top 85%',
        end: 'top 30%',
        toggleActions: 'play play resume reverse'
      },
      scaleY: (textAnim.value as HTMLElement).tagName === 'H1' ? 0.8 : 1,
      y: (textAnim.value as HTMLElement).tagName === 'H1' ? 3 : 0,
      opacity: 0.4,
      duration: 0.4,
      delay: props.delay,
      stagger: 0.4 / splitText.chars.length,
      ease: 'sine'
    })
  }
})
</script>

<template>
  <span
    ref="anim"
    class="anim inline-block scaleY-90"
  >
    <slot />
  </span>
</template>

<style>
.anim div {
  display:inline-block;
}
</style>
