/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#D42F2F',
        secondary: '#165B33',
        accent: '#FFD700',
      },
    },
  },
  plugins: [],
}
