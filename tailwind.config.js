const _ = require('lodash')
const plugin = require('tailwindcss/plugin') // docs: https://tailwindcss.com/docs/plugins#adding-components
const colors = require('tailwindcss/colors')

module.exports = {
   purge: [
     './public/**/*.html',
     './src/**/*.js',
     './src/**/*.jsx',
   ],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        colors: {
          orange: colors.orange,
          green: colors.green,
        }
      },
    },
    variants: {},
    plugins: [
      plugin(function({ addComponents, theme, e }) {
        const columnCount = {
          '.column-count-1': {
            columnCount: 1,
          },
          '.column-count-2': {
            columnCount: 2,
          },
          '.column-count-3': {
            columnCount: 3,
          },
          '.column-count-4': {
            columnCount: 4,
          },
          '.column-count-5': {
            columnCount: 5,
          },
        }
        const columnGap = _.map(theme('spacing'), (value, key) => {
          return {
            [`.${e(`column-gap-${key}`)}`]: {
              columnGap: `${value}`
            }
          }
        })
        const pageBreak = {
          '.page-break-inside-avoid': {
            pageBreakInside: 'avoid'// https://css-tricks.com/almanac/properties/b/break-inside/
          }
        }
        addComponents([
          columnCount,
          columnGap,
          pageBreak,
        ], {
          variants: ['responsive', 'hover'],
        })
      })
    ],
  }