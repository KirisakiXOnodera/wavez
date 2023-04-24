const { white } = require('color-name');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        primary: "#04151D",
        white: "#FFFFFF"
      },
      fontFamily: {
        'alata': ['Alata', 'sans-serif'],
      },
      fontFamily: {
        'Asul': ['Asul', 'sans-serif'],
      },
    },
    
  },
  plugins: [],
}