/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'poke-red': '#cc0000',
        'poke-black': '#333',
        'poke-light-gray': '#f6f6f6',
        'poke-yellow': '#FFCC00',
      },
      fontFamily: {
        dot: ['DotGothic16', 'sans-serif'],
      },
      keyframes: {
        'scale-up': {
          '0%': { transform: 'scale(0)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      animation: {
        'scale-up-once': 'scale-up 0.5s ease-out forwards',
      },
    },
    screens: {
      'xs': '540px', // 追加
    },
  },
  plugins: [],
}