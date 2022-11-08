/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
    },
    extend: {
      boxShadow: {
        'header-shadow': '0px 2px 4px rgba(19,50,67, 0.08)',
      },
      screens: {
        sm: '425px',
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      black: '#000000',
      warning: '#FC4F4F',
      'primary-color': {
        DEFAULT: '#BF76FC',
        100: '#C0BFFB',
        200: '#ff54ff',
        500: '#890071',
      },
      grey: {
        100: '#c1d0e0',
        200: '#797979',
        400: '#4D4D4D',
        600: '#333333',
        700: '#252c34',
      },
      'info-color': {
        DEFAULT: '#5D5FEF',
        100: '#EFEFFD',
      },
    },
    spacing: {
      0: '0px',
      1: '0.063rem',
      2: '0.125rem',
      4: '0.25rem',
      5: '0.3125rem',
      6: '0.375rem',
      7: '0.438rem',
      8: '0.5rem',
      10: '0.625rem',
      12: '0.75rem',
      14: '0.875rem',
      15: '0.9375rem',
      16: '1rem',
      17: '1.063rem',
      18: '1.125rem',
      19: '1.188rem',
      20: '1.25rem',
      22: '1.375rem',
      24: '1.5rem',
      25: '1.563rem',
      26: '1.625rem',
      28: '1.75rem',
      30: '1.875rem',
      32: '2rem',
      35: '2.188rem',
      36: '2.25rem',
      40: '2.5rem',
      42: '2.625rem',
      44: '2.75rem',
      48: '3rem',
      50: '3.125rem',
      56: '3.5rem',
      60: '3.75rem',
      64: '4rem',
      70: '4.375rem',
      75: '4.688rem',
      80: '5rem',
      88: '5.5rem',
      96: '6rem',
      100: '6.25rem',
      110: '6.875rem',
      120: '7.5rem',
      128: '8rem',
      140: '8.75rem',
      144: '9rem',
      150: '9.375rem',
      160: '10rem',
      168: '10.5rem',
      185: '11.563rem',
      200: '12.5rem',
      208: '13rem',
      240: '15rem',
      256: '16rem',
      280: '17.5rem',
      300: '18.75rem',
      320: '20rem',
      355: '22.188rem',
      375: '23.438rem',
      400: '25rem',
      465: '29.063rem',
      535: '33.438rem',
      640: '40rem',
      730: '45.625rem',
    },
    fontFamily: {
      base: ['Montserrat', 'sans-serif'],
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container-fluid': {
          width: '100%',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: '0.75rem',
          paddingRight: '0.75rem',
        },
        '.container': {
          width: '100%',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: '0.75rem',
          paddingRight: '0.75rem',
          '@screen lg': {
            maxWidth: '992px',
          },
          '@screen xl': {
            maxWidth: '1080px',
          },
          '@screen 2xl': {
            maxWidth: '1080px',
          },
        },
      })
    },
  ],
}
