/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors:{
        'brand':{
          'primaryColor': '#D12A2C', 
          'secondColor': '#A01620', 
        }
      }
    },
  },
  plugins: [],
}

