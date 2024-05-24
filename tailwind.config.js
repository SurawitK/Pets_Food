/** @type {import('tailwindcss').Config} */
/* biome-ignore lint: <explanation> */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      mono: ['Ubuntu Mono', 'monospace'],
      serif: ['Bree Serif', 'serif'],
      lemon: ['Lemon', 'serif'],
    },
    extend: {},
  },
  plugins: [],
};
