/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'aqua': '#00f9f9',
        'h-purple': '#ff1efe'
      },
      screens: {
        'm-lg': {'max': '1024px'}
      }
    }
  },
  plugins: [],
}