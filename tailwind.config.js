import fluid, { extract, fontSize } from 'fluid-tailwind';
import reset from 'tw-reset';

/** @type {import('tailwindcss').Config} */
export default {
  presets: [reset],
  plugins: [fluid],
  content: { files: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'], extract },
  theme: {
    /** @type {import('fluid-tailwind').FluidThemeConfig} */
    fluid: ({ theme }) => ({
      defaultScreens: ['20rem', theme('screens.lg')],
      // eslint-disable-next-line
      defaultContainers: [, theme('containers.2xl')]
    }),
    fontSize,
    fontFamily: {
      mono: ['Ubuntu Mono', 'monospace'],
      serif: ['Bree Serif', 'serif'],
      lemon: ['Lemon', 'serif'],
    },
    extend: {},
  },
};
