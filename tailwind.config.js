/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./login/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        'solitreo': ['Solitreo', 'cursive'],
        'caveat': ['Caveat', 'cursive'],
      }
    },
    
  },
  plugins: [
    {
      tailwindcss: {},
      autoprefixer: {},
    },
  ],
}