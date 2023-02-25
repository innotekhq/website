const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'dpurple': '#37013f',
        'sblue': '#557790',
        'lblue': '#c7e2fd',
        'background': colors.slate["700"],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
