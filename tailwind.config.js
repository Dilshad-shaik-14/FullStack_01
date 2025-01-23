/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: { 
        'alfa': ['"Alfa Slab One"', 'cursive'], },
    
    roboto: ['Roboto Condensed', 'sans-serif'],
    iceland: ['Iceland', 'sans-serif'],
    },
  },
  plugins: [],
}

