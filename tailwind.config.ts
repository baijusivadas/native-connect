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
        gray: {
          300: '#0b192c',
          400: '#0b192c',
          500: '#0b192c',
          600: '#0b192c',
          700: '#c19a68',
          800: '#c19a68',
          900: '#0b192c',
          950: '#f7f4ef',
        },
        purple: {
          400: '#9b1c31',
          500: '#9b1c31',
          600: '#9b1c31',
        },
        blue: {
          400: '#c19a68',
          500: '#c19a68',
          600: '#c19a68',
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;