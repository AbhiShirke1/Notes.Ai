/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{},
      fontFamily:{
        nunito:['Nunito', 'sans-serif']
      }
    },
  },
  plugins: [],
}