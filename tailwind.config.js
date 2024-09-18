/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['FiraGO', 'sans-serif'],
        body: ['HelveticaNeue', 'sans-serif']
      }
    },
  },
  plugins: [],
}