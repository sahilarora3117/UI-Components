const colors = require('tailwindcss/colors');
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './src/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      blue: {
        lightest: '#DFF6F0',
        light: '#46B3E6',
        DEFAULT: '#4D80E4',
        dark: '#2E279D',
      },
      red: {
        lightest: '#EB786B',
        light: '#F64662',
        DEFAULT: '#C61951',
        dark: '#741938',
      },
      yellow: {
        lightest: '#FFDF6B',
        light: '#FED049',
        DEFAULT: '#FFC107',
        dark: '#F9B208',
      },
      green: {
        lightest: '#CAF7E3',
        light: '#9FE6A0',
        DEFAULT: '#4AA96C',
        dark: '#206A5D',
      },
      gray: {
        lightest: '#e0e6ed',
        light: '#c0ccda',
        DEFAULT: '#3c4858',
        dark: '#1f2d3d',
      },
      white : {
        DEFAULT: "#FFFFFF",
      }
    },
  
  }

}
