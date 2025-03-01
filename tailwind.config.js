module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#a78bfa',
          DEFAULT: '#8b5cf6',
          dark: '#6d28d9',
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
