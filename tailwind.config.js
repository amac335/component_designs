/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  darkMode: 'class',
  content: [ 
    './src/**/*.{vue,js,ts,jsx,tsx}', ],
  theme: {
    extend: {
      colors: {
        dm_bg: '#0F172A'
      }
    },
  },
  plugins: [],
}
