import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import type { Ref } from 'vue'

interface GsapAnimationOptions {
  from?: gsap.TweenVars
  to?: gsap.TweenVars
  whenVisible?: boolean
  delay?: number
  stagger?: number | gsap.StaggerVars
  start?: string
  end?: string
  scrub?: boolean | number
  timeline?: boolean
}

export function useGsapAnimation(
  target: Ref<HTMLElement | SVGElement | null> | HTMLElement | SVGElement | null,
  options: GsapAnimationOptions
) {
  const { from, to, whenVisible = false, delay = 0, stagger, start = 'top 85%', end = 'top 30%', scrub } = options

  onMounted(() => {
    const element = unref(target)
    if (!element) return

    const animVars: gsap.TweenVars = { ...(from || to) }

    if (delay) {
      animVars.delay = delay / 1000 // Convert ms to seconds
    }

    if (stagger) {
      animVars.stagger = typeof stagger === 'number' ? stagger : stagger
    }

    if (whenVisible) {
      animVars.scrollTrigger = {
        trigger: element,
        start,
        end,
        toggleActions: 'play play resume reverse',
        ...(scrub !== undefined ? { scrub } : {})
      }
    }

    if (from) {
      gsap.from(element, animVars)
    } else if (to) {
      gsap.to(element, animVars)
    }
  })

  onUnmounted(() => {
    const element = unref(target)
    if (element) {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === element) {
          trigger.kill()
        }
      })
    }
  })
}

export function useGsapStagger(
  containerRef: Ref<HTMLElement | null>,
  childSelector: string,
  options: GsapAnimationOptions
) {
  const { from, to, delay = 0, stagger = 0.1 } = options

  onMounted(() => {
    const container = unref(containerRef)
    if (!container) return

    const children = container.querySelectorAll(childSelector)
    if (children.length === 0) return

    const animVars: gsap.TweenVars = { ...(from || to) }

    if (delay) {
      animVars.delay = delay / 1000
    }

    animVars.stagger = typeof stagger === 'number' ? stagger : stagger

    if (from) {
      gsap.from(children, animVars)
    } else if (to) {
      gsap.to(children, animVars)
    }
  })
}
