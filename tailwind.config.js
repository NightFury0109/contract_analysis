/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
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
  plugins: [],
}
