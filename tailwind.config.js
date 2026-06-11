/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f3f9',
          100: '#dae1f0',
          200: '#b8c6e3',
          300: '#8da4d1',
          400: '#6382bc',
          500: '#4663a3',
          600: '#364f8a',
          700: '#2b4071',
          800: '#1e3058',
          900: '#0f1e3d',
          950: '#0a1428',
        },
        gold: {
          50: '#fefbf0',
          100: '#fdf4d4',
          200: '#fbe7a0',
          300: '#f8d56c',
          400: '#f4c240',
          500: '#e6a817',
          600: '#c78c0e',
          700: '#9e6c0b',
          800: '#7a540d',
          900: '#5e410f',
        },
        teal: {
          50: '#effefa',
          100: '#c8fff2',
          200: '#91fee6',
          300: '#52f5d6',
          400: '#20dfc1',
          500: '#08c4ab',
          600: '#029e8f',
          700: '#067e73',
          800: '#0a645d',
          900: '#0d524d',
        },
      },
      fontFamily: {
        heading: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        accent: ['DM Sans', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
