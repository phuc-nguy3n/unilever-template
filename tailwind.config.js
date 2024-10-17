/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        transformer: ['SVN-Transformer', 'sans-serif'],
        gotham: ['SVN-Gotham', 'sans-serif']
      }
    }
  },
  plugins: ['prettier-plugin-tailwindcss']
}
