/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'navy': '001F3F',
    },
    fontFamily: {
      sans: [ 'Poppins', 'sans-serif'], 
      serif: ['Open sans', 'serif'], 
    },
    extend: {},
  },
  plugins: [],
}