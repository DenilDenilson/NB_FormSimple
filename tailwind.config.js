const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./src/**/*.{html, js}",
    //'./index.html',
    "./*.{html, js}",
  ],
  theme: {
    screen: {
      'xl': '1440px',
    },
    extend: {
      fontFamily: {
        'sans': ['Josefina_sans', ...defaultTheme.fontFamily.sans],
      },

      backgroundImage: {
        'image-bg-desktop': "url('./images/bg-pattern-desktop.svg')",
      },
    },
  },
  plugins: [],
}
