const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './.stores/**/*.{js,ts,jsx,tsx}',
    './stories/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'rgb(var(--background))',
        foreground: 'rgb(var(--foreground))',
        accent: 'rgb(var(--accent))',
        success: 'rgb(var(--success))',
        destructive: 'rgb(var(--destructive))',
        warning: 'rgb(var(--warning))',
        muted: 'rgb(var(--muted))',
        border: 'rgb(var(--border))',
      },
    },
  },
  plugins: [
    require('tailwindcss-react-aria-components'),
    require('tailwindcss-animate'),
    require('@tailwindcss/container-queries'),
  ],
};
