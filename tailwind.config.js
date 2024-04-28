module.exports = {
  prefix: '',
  content: [
    './src/**/*.{html,scss,ts}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',

      black: {
        light: '#494949',
        DEFAULT: '#333333',
        semidark: '#262626',
        dark: '#1A1A1A'
      },
      white: '#F1F1F1',
      gray: {
        light: '#D2D2D2',
        DEFAULT: '#B5B5B5',
        dark: '#575757'
      },
      cyan: {
        light: '#569dff',
        DEFAULT: '#167dff',
        dark: '#166dc6'
      },
      red: '#eb3828',
      green: {
        DEFAULT: '#56AF56',
        dark: '#134a13'
      },

      markdown: {
        background: '#0d1117',
        text: '#c9d1d9'
      }
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      monospace: ['monospace']
    },
    container: {
      center: true
    },
    extend: {
      boxShadow: {
        dark: '3px 3px 3px #00000029',
        'dark-down': '0px 3px 6px #00000029',
        inset: 'inset 0px 3px 6px #00000029'
      },
      borderRadius: {
        '4xl': '2rem'
      }
    },
  },
  plugins: [],
}

