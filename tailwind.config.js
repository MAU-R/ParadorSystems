// tailwind.config.js
import plugin from 'tailwindcss/plugin'

export const content = [
  './components/**/*.{vue,js}',
  './layouts/**/*.vue',
  './pages/**/*.vue',
  './app.vue',
]
export const theme = {
  extend: {
    // aquí puedes extender colores, tamaños, etc.
  },
}
export const plugins = [
  plugin(function ({ addComponents }) {
    addComponents({
      '.card-base': {
        '@apply rounded-2xl shadow-md p-4 sm:p-6 md:p-8': {},
      },
      '.title_responsive': {
        '@apply font-black 2xl:text-5xl xl:text-3xl lg:text-xl md:text-xl sm:text-lg xs:text-md': {},
      },
      '.subtitle_responsive': {
        '@apply font-bold 2xl:text-3xl xl:text-xl lg:text-lg md:text-lg sm:text-md xs:text-sm': {},
      },
      '.text_responsive': {
        '@apply font-normal 2xl:text-xl xl:text-lg lg:text-md md:text-md sm:text-sm xs:text-sm': {},
      },
    })
  }),
]
