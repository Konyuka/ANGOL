const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
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
      animation: {
        'bounce-slow': 'spin 1s linear infinite;',
        fade: 'fadeOut 5s ease-in-out'
      }
    },
  },
  variants: {
    translate: ({ after }) => after(['group-hover']),
    extend: {
      animation: ['hover', 'focus', 'active', "group-hover", 'motion-safe', 'motion-reduce'],
      translate: ['responsive', 'hover', 'focus', "group-hover"],
      backgroundBlendMode: ['hover', 'focus', "group-hover"],
      display: ["responsive", "group-hover", "group-focus"],
      transitionDuration: ['hover', 'focus'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'), 
    require('@tailwindcss/typography'), 
    require('@tailwindcss/aspect-ratio')],

}
