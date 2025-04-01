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
          100: "#0D1223",
          200: "#181F32E0",
        },
        grey: {
          100: "#8A8C8A"
        },
        blue: {
          DEFAULT: '#2C5CFF',
          100: "#181F32",
        },
        red: {
          DEFAULT: '#FA4A48'
        },
        primary: '#1DA1F2',
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
