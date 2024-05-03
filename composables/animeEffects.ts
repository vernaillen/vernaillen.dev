import { _backgroundImage, _backgroundOpacity, _backgroundPosition, _opacity } from "#tailwind-config/theme"

const _useH1Effect = () => {
  return {
    targets: 'h1',
    translateX: [-50, 0],
    // backgroundColor: '#2e1b02',
    // backgroundImage: 'linear-gradient(to bottom left, #2e1b02, #ee4b2b)',
    // borderRadius: ['0%', '50%'],
    // textShadow: '6px 2px 5px rgba(168,158,32,0.8)',
    // textShadow: '40px 18px 8px rgba(156, 142, 27, 0.5)',
    textShadow: '-1px 2px 5px rgba(156, 142, 27, 0.4)',
    // easing: 'easeInOutQuad',
    // endDelay: 100,
    // backgroundOpacity: 0.5,
  }
}

export const useH1Effect = _useH1Effect
