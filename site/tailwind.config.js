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
        'h-purple': '#ff1efe',
        'bg-main': '#0B0E17',
        'bg-secondary': '#2E1760',
        'misc': '#3423A6',
      },
      screens: {
        'm-lg': { 'max': '1024px' },
        'm-xs': { 'max': '639px' },
        'm-2xs': { 'max': '425px' },
      }
    }
  },
  plugins: [],
}