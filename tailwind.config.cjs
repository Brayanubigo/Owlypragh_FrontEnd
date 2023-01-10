/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './node_modules/tw-elements/dist/js/**/*.js',
    './src/**/*.{html,js}'
  ],
  theme: {
    extend: {
      height: {
        '128': '60rem',
      },
      backgroundImage: {
        'hero-pattern': "url('./src/Fotos buffon prueba/paisaje2.jpg')",
        'hero-2': "url('./src/Fotos buffon prueba/inicio.jpg')",
      }
    },
    
  },
  plugins: [
     require('tw-elements/dist/plugin')
  ],
}
