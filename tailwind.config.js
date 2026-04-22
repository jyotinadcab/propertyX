/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // This tells Tailwind to scan all JS/JSX/TS/TSX files in src
  ],
  theme: {
    extend: {
      // You can add custom colors, fonts, spacing, etc. here
      colors: {
        teal: {
          500: '#14B8A6',
          600: '#0D9488',
        },
        gray: {
          800: '#1F2937',
          900: '#111827',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
