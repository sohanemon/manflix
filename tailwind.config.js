/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/features/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize: { fluid: 'minmax(14px,32px)' },
      colors: {
        primary: {
          100: '#fbe1de',
          200: '#f8c3bd',
          300: '#f4a69c',
          400: '#f1887b',
          500: '#ed6a5a',
          600: '#be5548',
          700: '#8e4036',
          800: '#5f2a24',
          900: '#2f1512',
        },
        secondary: {
          100: '#e4f0fb',
          200: '#c9e2f7',
          300: '#add3f2',
          400: '#92c5ee',
          500: '#77b6ea',
          600: '#5f92bb',
          700: '#476d8c',
          800: '#30495e',
          900: '#18242f',
        },
        accent: '#e8eef2',
        base: '#08090a',
      },
    },
  },
  plugins: [require('@tailwindcss/container-queries')],
};
