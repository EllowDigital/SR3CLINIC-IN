/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0A192F',
          light: '#112240',
          dark: '#060f1e',
        },
        charcoal: '#1A1B26',
        gold: {
          DEFAULT: '#D4A017',
          light: '#F0C040',
          dark: '#B8860B',
        },
        clinical: {
          white: '#F9FAFB',
          gray: '#E5E7EB',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
