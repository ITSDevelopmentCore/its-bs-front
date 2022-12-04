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
      keyframes: {
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10.0deg)' },
          '60%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        },
      },
      animation: {
        'waving-hand': 'wave 1s linear',
      },
    }

  },
  plugins: [
    require('tailwindcss-ripple')()
  ]
}