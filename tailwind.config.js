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
          'regal-blue': '#243c5a',
        }
      },
    },
    variants: {},
    plugins: [],
  }