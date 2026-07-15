/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        'forest-green': '#4A5D3E',
        'forest-hover': '#5c7350',
        cream: '#F5F1E8',
        terracotta: '#9C6B48',
        slate: '#6E7480',
        ink: '#26261F',
        'body-gray': '#5f5e53',
        hairline: '#EDEBE3',
        panel: '#F5F4EC',
        paper: '#F4F2E9',
        'sage-tint': '#F3F5EC',
        'sage-border': '#A7B18C',
        'sage-text': '#55603F',
        'tag-terracotta': '#A8683C',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Source Sans 3"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
