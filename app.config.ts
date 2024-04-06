export default defineAppConfig({
  ui: {
    primary: 'vernaillen',
    gray: 'neutral',
    variables: {
      light: {
        background: '255 255 255'
      },
      dark: {
        background: '12 12 13'
      }
    },
    header: {
      logo: 'absolute top-0',
      links: {
        base: 'border-t-2 h-16 px-1',
        inactive: 'border-transparent',
        active: 'border-vernaillen-500',
      },
    },
    aside: {
      links: {
        base: 'border-l-2 border-r-2 border-transparent hover:border-vernaillen-500',
        inactive: '',
        active: 'border-vernaillen-500',
      },
    },
  },
})
