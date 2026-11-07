/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./js/**/*.js"],
  theme: {
    extend: {
      colors: {
        ink: { 900: "#0b0e13", 800: "#12161d", 700: "#1a1f28", 600: "#262c37" },
        gold: { 400: "#d9b866", 500: "#c8a24a", 600: "#a8863a" },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ["Playfair Display", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};