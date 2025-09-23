/** @type {import('tailwindcss').Config} */

export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '475px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '1920px',
    },
    extend: {
      colors: {
        button: {
          primary: 'var(--color-button-primary)',
          hover: 'var(--color-button-hover)',
          disable: 'var(--color-button-disable)',
        },
        text: {
          primary: 'var(--color-text-primary)',
          secondary: 'var(--color-text-secondary)',
          white: 'var(--color-text-white)',
          tertiary: 'var(--color-text-tertiary)',
          tag: 'var(--color-text-tag)',
        },
        stroke: {
          primary: 'var(--color-stroke-primary)',
          secondary: 'var(--color-stroke-secondary)',
          tertiary: 'var(--color-stroke-tertiary)',
        },
        icon: {
          primary: 'var(--color-icon-primary)',
          secondary: 'var(--color-icon-secondary)',
        },
        card: {
          first: 'var(--color-card-first)',
          second: 'var(--color-card-second)'
        },

        background: {
          primary: 'var(--color-background-primary)',
          secondary: 'var(--color-background-secondary)',
          tertiary: 'var(--color-background-tertiary)',
          fourth: 'var(--color-background-fourth)',
        }
      },
      fontFamily: {
        geist: ['var(--font-montserrat)', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 