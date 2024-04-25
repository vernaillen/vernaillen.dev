import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'
import { iconsPlugin, getIconCollections } from '@egoist/tailwindcss-icons'

const customIconSet = {
  prefix: 'custom',
  icons: {
    liferay: {
      body: '<path d="M13.653 30.436H0V17.35c0-.57 0-.57.57-.57h13.37c-.285 4.836-.285 9.387-.285 13.653z" fill="#1d396b"/><path d="M13.653 0v13.653H0V0h13.653z" fill="#0b1f3b"/><path d="M50.347 33.564H64v13.653H50.347V33.564zm-2.845 16.783V64H33.85V50.347h13.653z" fill="#1d396b"/><path d="M50.347 50.347H64V64H50.347V50.347z" fill="#0b1f3b"/><path d="M30.436 0v13.653H16.782V0h13.653z" fill="#1d396b"/><path d="M30.436 16.782v13.653H16.782V16.782h13.653zM47.502 0v13.653H33.85V0h13.653zm-33.85 33.564v13.653H0V33.564h13.653zm33.85 0v13.653H33.85V33.564h13.653zM64 16.782v13.653H50.347V16.782H64zM30.436 50.347V64H16.782V50.347h13.653z" fill="#7cb1df"/>',
      width: 64,
      height: 64
    }
  }
}

export default <Partial<Config>>{
  content: [
    './app.vue',
    './assets/svg/*.svg',
    './components/*.vue',
    './components/**/*.vue',
    './content/**/*.{md,yml}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        serif: ['Inter', ...defaultTheme.fontFamily.serif],
        mono: ['PT Mono', ...defaultTheme.fontFamily.mono],
      },
      colors: {
        white: '#FFFFFF',
        black: '#0c0c0d',
        dark: '#333333',
        vernaillen: {
          DEFAULT: '#9c8e1b',
          50: '#faf9f0',
          100: '#f5f3e1',
          200: '#e6e2b5',
          300: '#d6d090',
          400: '#baaf4e',
          500: '#9c8e1b',
          600: '#8c7815',
          700: '#755d0f',
          800: '#5e4509',
          900: '#452e06',
          950: '#2e1b02',
        },
        java: {
          DEFAULT: '#3a75b0',
          400: '#3a75b0',
          500: '#3a75b0',
        },
        springframework: {
          DEFAULT: '#6db33f',
          400: '#6db33f',
          500: '#6db33f',
        },
        nuxt: {
          DEFAULT: '#00c16a',
          400: '#00dc82',
          500: '#00c16a',
        },
        vue: {
          DEFAULT: '#42b883',
          400: '#42b883',
          500: '#42b883',
        },
        docker: {
          DEFAULT: '#1d63ed',
          400: '#1d63ed',
          500: '#1d63ed',
        },
        kubernetes: {
          DEFAULT: '#326de6',
          400: '#326de6',
          500: '#326de6',
        },
        jenkins: {
          DEFAULT: '#4b758b',
          400: '#4b758b',
          500: '#4b758b',
        },
        liferay: {
          DEFAULT: '#0b63ce',
          400: '#0b63ce',
          500: '#0b63ce',
        },
        angular: {
          DEFAULT: '#dd0031',
          400: '#dd0031',
          500: '#dd0031',
        },
      },
    },
  },
  plugins: [
    iconsPlugin({
      collections: {
        custom: customIconSet,
        ...getIconCollections(['heroicons', 'simple-icons', 'mdi', 'carbon', 'logos', 'ic', 'logos'])
      }
    })
  ]
}
