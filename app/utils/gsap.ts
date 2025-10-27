import gsap from 'gsap'

export const reveal = (index?: number) => ({
  opacity: 0.1,
  duration: 0.6,
  ease: 'power2.out',
  delay: index ? index * 0.04 : 0
})

export const revealInView = (el: HTMLElement, index?: number) => {
  gsap.fromTo(el,
    {
      opacity: 0,
      y: 15,
      scale: 0.98
    },
    {
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        end: 'top 65%',
        toggleActions: 'play none none reverse',
        once: false
      },
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.6,
      delay: index ? index * 0.06 : 0,
      ease: 'power2.out'
    }
  )
}
