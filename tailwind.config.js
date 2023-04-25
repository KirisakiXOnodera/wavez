/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      fontSize: {
        "login-font-size": "40px",
      },

      colors: {
        "custom-color": "#04151D",
        "login-color": "#e9ebe9",
        "wavez-color": "#07405b",
        "input-color": "rgb(33, 49, 60)",
        "input-bg-color": "rgb(255, 255, 255)",
        "border-color": "rgb(124, 138, 255)",
        "button-color": "rgba(154, 127, 105, 0.9)",
        // custom-color for the whole website body

        "custom-color-sidebar-brown": "#9A7F69",
      },
      fontFamily: {
        alata: ["Alata", "sans-serif"],
      },
      width: {
        "container-width": "800px",
        "image-width": "55%",
        "login-width": "45%",
      },
      height: {
        "login-height": "500px",
      },
    },
  },
  plugins: [require("tailwindcss-filters")],
};
