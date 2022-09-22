/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'input-gray': '#F0EEEE',
        'bar-gray': '#D9D9D9',
        'editor-white': '#F9F9F9',
        'selection-gray': '#635B5B',
      }
    },
  },
  plugins: [
    require('@headlessui/tailwindcss')
  ],
}
