/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./page/**/*.{html,js}",
    "./**/*.{html,js}",
  ],
  theme: {
    container:{
      center: true,
      padding: '16px',
    },
    extend: {
      colors:{
        primary: '#ffae00'
      }
    },
  },
  plugins: [],
}

