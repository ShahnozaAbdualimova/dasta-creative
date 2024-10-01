/** @type {import('tailwindcss').Config} */
import { Config } from 'tailwindcss'

export default <Partial<Config>>{
  mode: 'jit',
  darkMode: 'class',
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '1216px',
        },
      },
      colors: {
        dark: {
          100: "#0D1223"
        },
        blue: {
          DEFAULT: '#2C5CFF',
          100: "#181F32",
        },
        red: {
          DEFAULT: '#FA4A48'
        }
      },
      lineHeight: {
        130: '130%',
        120: '120%',
        140: '140%',
      },
    }
  },
  plugins: [],
}
