/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "#C8AA6E",
        "background-light": "#F0EAD6",
        "background-dark": "#0B0C10",
      },
      fontFamily: {
        display: ["Cinzel", "serif"],
        serif: ["Cormorant Garamond", "serif"],
      },
    },
  },
  plugins: [],
}