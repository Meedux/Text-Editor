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
        'border': '#B1B1B1',
        'onyx': '#393E41',
        'ivory': '#F6F7EB',
        'english-violet': '#5C415D',
        'yellow-ryb': '#FFFC31',
        'cinnabar': '#E94F37',
      }
    },
  },
  plugins: [
    require('@headlessui/tailwindcss')
  ],
}
