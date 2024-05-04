export const useFadeIn = (targets: string) => {
  return useAnime({
    targets,
    opacity: [0, 1],
    easing: 'linear',
    duration: 500,
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
      value: [0.8, 1],
      duration: 600,
      easing: 'easeInOutQuart',
    },
  })
}
