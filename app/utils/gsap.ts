import gsap from 'gsap'

export const reveal = (index?: number) => ({
  opacity: 0.1,
  duration: 0.5,
  ease: 'Power1.easeInOut',
  delay: index ? index * 0.03 : 0
})

export const revealInView = (el: HTMLElement, index?: number) => {
  gsap.from(el, {
    scrollTrigger: {
      trigger: el,
      start: 'top 90%',
      end: 'top center',
      toggleActions: 'play pause resume reset',
      scrub: true
    },
    opacity: 0.5,
    y: 50,
    duration: 0.5,
    ease: 'Power1.easeInOut',
    delay: index ? index * 0.5 : 0
  })
}
