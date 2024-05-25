import type { Config } from 'tailwindcss'

export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './composables/**/*.{js,ts}',
    './assets/**/*.{css}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['TTCommon', 'sans-serif'],
      },
      colors: {
        dark: {
          100: '#101010',
          200: '#232323',
        },
        gray: {
          100: '#868686',
          200: '#F3F3F3',
        },
        violet: '#E2BEFF',
      },
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1249px',
      },
    },
  },
  plugins: [],
} satisfies Config
