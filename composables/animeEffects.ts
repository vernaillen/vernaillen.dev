export const useH1Effect = () => {
  return useAnime({
    targets: 'h1',
    translateX: [-50, 0],
    opacity: [0, 1],
    easing: 'spring',
  })
}
export const useFadeIn = (targets: string) => {
  return useAnime({
    targets,
    opacity: [0, 1],
    scale: 1.1,
    easing: 'linear',
    duration: 300,
  })
}
export const useBounceEffect = (targets: string) => {
  return useAnime({
    targets,
    rotate: {
      value: 360,
      duration: 300,
      easing: 'easeInOutSine',
    },
    scale: {
      value: 2,
      duration: 600,
      easing: 'easeInOutQuart',
    },
  })
}
