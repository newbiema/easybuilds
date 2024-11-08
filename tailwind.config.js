/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,js},",
    "node_modules/preline/dist/*.js",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [require('tailgrids/plugin'),
    require('flowbite/plugin'),
    require('preline/plugin'),
  ],
}