module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {}
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        based: {
          primary: '#E3E3E3',
          secondary: '#009BCB',
          accent: '#2e3440',
          neutral: '#374151',
          info: '#3ABFF8',
          success: '#36D399',
          warning: '#FBBD23',
          error: '#F87272',
          'base-100': '#1B2636',
        }
      },
    ]
  }
}
