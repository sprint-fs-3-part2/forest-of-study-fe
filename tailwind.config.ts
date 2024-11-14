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
