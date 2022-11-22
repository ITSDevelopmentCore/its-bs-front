module.exports = {
  content: ['./source/**/*.{js,jsx,html}'],
  darkMode: 'class',

  theme: {

    ripple: theme => ({
      colors: theme('colors')
    }),

    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'nexa' : ['Nexa', 'sans-serif']
      },
      colors: {
        'colorPrimary' : '#0EA5E9',
        'colorBlack' : '#181818'
      },
    }

  },
  plugins: [
    require('tailwindcss-ripple')()
  ]
}