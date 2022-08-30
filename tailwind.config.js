/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        "primary": {
          "100": "#7d6edd",
          "200": "#5845d3",
          "300": "#3f2cba",
          "400": "#342498",
          "500": "#2a1d7c"
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
