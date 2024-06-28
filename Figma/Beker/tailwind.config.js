/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}","./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      'hero-pattern': "url('./src/hero-img.jpg')",
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

