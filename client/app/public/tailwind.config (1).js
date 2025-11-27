 /** @type {import('tailwindcss').Config} */
 export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./img/main_picture.jpg')",
        'main-hero-pattern':"url('./img/main_picture.jpg')",
        'main-info-pattern':"url('./img/krupnym-planom-mikrofon-i-pop-fil-tr.jpg')",
        
      }
    },
    
  },
  plugins: [],
}