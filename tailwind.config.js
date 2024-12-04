import { createPreset } from 'fumadocs-ui/tailwind-plugin';
import animate from 'tailwindcss-animate';
import plugin from 'tailwindcss/plugin';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './content/**/*.{mdx,tsx}',
    './node_modules/fumadocs-ui/dist/**/*.js',
  ],
  presets: [createPreset({ addGlobalColors: true })],
  theme: {
    extend: {
      height: { sub: '1.4375rem' },
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)'],
      },
      colors: {
        gray: {
          DEFAULT: 'hsla(var(--gray), <alpha-value>)',
          foreground: 'hsla(var(--gray-foreground), <alpha-value>)',
          50: 'hsla(var(--gray-50), <alpha-value>)',
          100: 'hsla(var(--gray-100), <alpha-value>)',
          200: 'hsla(var(--gray-200), <alpha-value>)',
          300: 'hsla(var(--gray-300), <alpha-value>)',
          400: 'hsla(var(--gray-400), <alpha-value>)',
          500: 'hsla(var(--gray-500), <alpha-value>)',
          600: 'hsla(var(--gray-600), <alpha-value>)',
          700: 'hsla(var(--gray-700), <alpha-value>)',
          800: 'hsla(var(--gray-800), <alpha-value>)',
          900: 'hsla(var(--gray-900), <alpha-value>)',
        },
        green: {
          sub: 'rgba(20, 189, 149, 0.21)',
        },
        purple: {
          100: '#F4F4FF',
          200: '#E2E1FF',
          300: '#CBCCFF',
          400: '#ABABFF',
          500: '#8D8DFF',
          600: '#5D5DFF',
          700: '#4B4ACF',
        },
        secondary: {
          300: '#878787',
          400: '#616161',
          500: '#383838',
          600: '#363636',
          700: '#2E2E2E',
          750: '#292929',
          800: '#000000',
          main: '#000000',
        },
        primary: {
          DEFAULT: 'hsla(var(--primary), <alpha-value>)',
          foreground: 'hsla(var(--primary-foreground), <alpha-value>)',
          300: 'hsla(var(--primary-300), <alpha-value>)',
          400: 'hsla(var(--primary-400), <alpha-value>)',
          500: 'hsla(var(--primary-500), <alpha-value>)',
          600: 'hsla(var(--primary-600), <alpha-value>)',
          700: 'hsla(var(--primary-700), <alpha-value>)',
          800: 'hsla(var(--primary-800), <alpha-value>)',
          900: 'hsla(var(--primary-900), <alpha-value>)',
          1000: 'hsla(var(--primary-1000), <alpha-value>)',
        },
      },
      lineHeight: {
        sub: '1.4375rem',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle, var(--tw-gradient-stops))',
        'repeat-gradient-to-r': 'repeating-linear-gradient(to right, var(--tw-gradient-stops))',
        'repeat-gradient-to-br':
          'repeating-linear-gradient(to bottom right, var(--tw-gradient-stops))',
      },
      keyframes: {
        stroke: {
          from: {
            'stroke-dasharray': '1000',
          },
          to: {
            'stroke-dasharray': '1000',
            'stroke-dashoffset': '2000',
          },
        },
      },
      animation: {
        stroke: 'stroke 5s linear infinite',
      },
    },
  },
  plugins: [animate, plugin(({ addVariant }) => addVariant('child', '& > *'))],
};
