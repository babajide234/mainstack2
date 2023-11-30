/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:''
      },
      boxShadow:{
        navbar:'0px 2px 4px 0px rgba(45, 59, 67, 0.05), 0px 2px 6px 0px rgba(45, 59, 67, 0.06)'
      },
      backgroundImage:{
        monochrome: 'linear-gradient(139deg, #5C6670 2.33%, #131316 96.28%)'
      }
    },
  },
  plugins: [],
}

