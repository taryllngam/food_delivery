/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html, js, ts, vue}", 
    "./src/**/*"
],
  theme: {
    extend: {},
  },
  plugins:  [
    require('postcss-import'),
    require('tailwindcss/nesting')(require('postcss-nesting')),
    require('autoprefixer'),
    require('tailwindcss'),
    ],
}

