module.exports = {
  content: ['./source/**/*.{js,jsx,html}'],
  darkMode: 'class',

  theme: {

    ripple: theme => ({
      colors: theme('colors')
    }),

    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif']
      },
    }

  },
  plugins: [
    require('tailwindcss-ripple')()
  ]
}