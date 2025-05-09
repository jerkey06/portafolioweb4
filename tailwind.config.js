/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#60a5fa', // Blue for primary actions
          DEFAULT: '#3b82f6',
          dark: '#2563eb',
        },
        secondary: {
          light: '#a78bfa', // Purple for secondary actions
          DEFAULT: '#8b5cf6',
          dark: '#6d28d9',
        },
        accent: {
          light: '#34d399', // Green for success/available states
          DEFAULT: '#10b981',
          dark: '#059669',
        },
      },
      boxShadow: {
        'neobrutalist': '4px 4px 0 0 currentColor',
        'neobrutalist-hover': '6px 6px 0 0 currentColor',
        'neobrutalist-active': '2px 2px 0 0 currentColor',
      },
    },
  },
  plugins: [],
};