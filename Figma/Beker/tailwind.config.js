/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}","./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('../src/hero-img.jpg')",
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

