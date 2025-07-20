import gsap from 'gsap'

export const reveal = (index?: number) => ({
  opacity: 0.1,
  duration: 0.5,
  ease: 'Power1.easeInOut',
  delay: index ? index * 0.03 : 0
})

export const revealInView = (el: HTMLElement, index?: number) => {
  gsap.to(el, {
    scrollTrigger: {
      trigger: el,
      start: 'top 85%',
      end: 'top center',
      toggleActions: 'play play resume reverse'
    },
    opacity: 1,
    x: 0,
    y: 0,
    duration: 0.5,
    delay: index ? index * 0.1 : 0,
    ease: 'sine.inOut'
  })
}
