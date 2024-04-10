import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
  content: [
    './app.vue',
    './assets/svg/*.svg',
    './components/*.vue',
    './components/**/*.vue',
    './content/**/*.md',
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
      },
    },
  },
}
