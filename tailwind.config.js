module.exports = {
  mode: 'jit',
  purge: {
    content: [
      './src/pages/**/*.{js,ts,jsx,tsx}',
      './src/components/**/*.{js,ts,jsx,tsx}',
      './src/styles/**/*.css',
    ],
    options: {
      safelist: {
        greedy: [
          /text-(primary|subtle)/,
          /border-(primary|subtle)/,
          /mb-3/,
          /rounded-(md|full)/,
          /opacity-(0|1)/,
        ],
      },
    },
  },
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        xs: '532px',
        '3xl': '1792px',
      },
      colors: {
        fuschia: {
          100: '#BE58CB',
          90: '#BE58CB',
          80: '#F178B6',
          60: '#FCDDEC',
        },
        iris: {
          100: '#5D5FEF',
          80: '#7879F1',
          70: '#6A99DD',
          60: '#A5A6F6',
        },
        deepFuscia: '#BE58CB',
        pinkRed: '#F10E5A',
        cornflowerBlue: '#6A99DD',
        primary: '#323232',
        secondary: '#444444',
        subtle: '#777777',
      },
      backgroundImage: {
        'hero-pattern':
          'url(/images/background.webp), url(/images/background.jpg)',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        spartan: ['Spartan', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-.1em',
      },
      dropShadow: {
        footer: '0 10px 10px rgba(0, 0, 0, 0.25)',
      },
      scale: {
        60: 0.6,
        80: 0.8,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
