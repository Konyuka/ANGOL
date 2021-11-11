const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'heading-font': ['Titillium Web', 'cursive'],
        'primary-font': ['Dosis', 'cursive']
      },
      colors: {
        teal: colors.teal,
        cyan: colors.cyan,
      },
    },
  },
  variants: {
    translate: ({ after }) => after(['group-hover']),
    extend: {
      animation: ['hover', 'focus', 'active'],
      translate: ['responsive', 'hover', 'focus'],
      backgroundBlendMode: ['hover', 'focus'],
      display: ["responsive", "group-hover", "group-focus"],
    },
  },
  plugins: [
    require('@tailwindcss/forms'), 
    require('@tailwindcss/typography'), 
    require('@tailwindcss/aspect-ratio')],

}
