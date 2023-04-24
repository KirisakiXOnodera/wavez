/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'custom-color': '#04151D',
        // custom-color for the whole website body

        'custom-color-sidebar-brown': '#9A7F69',
      },
      fontFamily: {
        'alata': ['Alata', 'sans-serif'],
      },
      spacing: {
        '79': '318px',
      },
    },
  },
  plugins: [
    require('tailwindcss-filters'),
  ],
}