import type { Config } from "tailwindcss";
import daisyui from 'daisyui'

const config: Config = {
  mode: 'jit',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        sm: '0.707rem',
        base: '1rem',
        xl: '1.414rem',
        '2xl': '1.999rem',
        '3xl': '2.827rem',
        '4xl': '3.997rem',
        '5xl': '5.652rem',
      },
      fontFamily: {
        Afacad: ['Afacad Flux', 'sans-serif']
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        "semi-bold": '600',
        bold: '800',
      },
    },
  },
  plugins: [
    daisyui,
  ],
  daisyui: {
    themes: [
      'synthwave'
    ]
  },
  darkMode: ['class', '[data-theme="synthwave"]']
};
export default config;
