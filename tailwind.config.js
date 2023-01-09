/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:"class",
  content: ['./*.htm'],
  theme: {
    extend: {
      screens:{
        "sm":"480px",
        "md":"768px",
        "lg":"1024px",
        "xl":"1280px",
      },
      spacing:{
        "big":"28rem"
      }
    },
  },
  plugins: [],
}
