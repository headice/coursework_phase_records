 /** @type {import('tailwindcss').Config} */
 export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./img/main_picture.jpg')",
        'main-hero-pattern':"url('./img/main_picture.jpg')",
        'main-info-pattern':"url('./img/krupnym-planom-mikrofon-i-pop-fil-tr.jpg')",
        'studio-gear-pattern':"url('./img/studio_info_display.jpg')",
        'pc-pattern':"url('./img/pc_studio_info_display.jpg')",
        'daw-pattern':"url('./img/dawvst_info_display.jpg')",
        
      }
    },
    
  },
  plugins: [],
}