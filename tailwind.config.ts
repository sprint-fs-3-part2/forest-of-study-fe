import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        black: {
          DEFAULT: 'var(--black)',
          50: 'var(--black-50)',
          40: 'var(--black-40)',
          10: 'var(--black-10)',
        },
        gray: {
          DEFAULT: 'var(--gray)',
          light: 'var(--gray-light)',
          lighter: 'var(--gray-lighter)',
        },
        brand: 'var(--brand)',
        green: {
          DEFAULT: 'var(--green)',
          text: 'var(--green-text)',
        },
        error: {
          DEFAULT: 'var(--error)',
          bg: 'var(--error-bg)',
        },
        red: 'var(--red)',
        yellow: {
          DEFAULT: 'var(--yellow)',
          text: 'var(--yellow-text)',
        },
        blue: {
          DEFAULT: 'var(--blue)',
          text: 'var(--blue-text)',
        },
        pink: {
          DEFAULT: 'var(--pink)',
          text: 'var(--pink-text)',
        },
      },
      screens: {
        sm: '375px',
        md: '744px',
        xl: '1200px',
      },
      fontFamily: {
        sans: ['var(--font-pretendard-variable)'],
        pretendard: ['var(--font-pretendard-variable)'],
        jejudoldam: ['var(--font-jejudoldam)'],
      },
    },
  },
  plugins: [],
};
export default config;
