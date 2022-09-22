/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        sm: '425px',
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      black: '#000000',
      'primary-color': {
        DEFAULT: '#BF76FC',
        100: '#C0BFFB',
      },
      grey: {
        200: '#797979',
        400: '#4D4D4D',
        600: '#333333',
      },
    },
    fontFamily: {
      base: ['Montserrat', 'sans-serif'],
    },
  },
  plugins: [],
}
