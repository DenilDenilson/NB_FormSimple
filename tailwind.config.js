const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './src/**/*.{html, js}',
    //'./index.html',
    './*.{html, js}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Josefina_sans', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
