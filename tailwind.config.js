/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        paper: '#FAF9F4',
        ink: '#26251C',
        body: '#3C3B31',
        soft: '#5C5A4E',
        muted: '#8B8878',
        hairline: '#E5E2D6',
        green: '#4A5D3E',
        'green-dark': '#3D4D33',
        'field-bg': '#FFFEFA',
        'field-border': '#D8D4C4',
      },
      fontFamily: {
        serif: ['"Newsreader"', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
