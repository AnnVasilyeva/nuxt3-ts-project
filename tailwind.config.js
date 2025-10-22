/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#101010',  // черный
        secondary: '#E8E8E8', // серый-hover
        violet: '#E2BEFF',      // светло-фиолетовый
        light: '#F3F3F3',     // светло-серый
        gray: '#868686' //серый
      },
    },
  },
  plugins: [],
}
