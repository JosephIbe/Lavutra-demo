// tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          500: '#D4AF37',
        },
      },
      fontFamily: {
        sans: ['var(--font-neue-haas)', 'sans-serif'],
        mono: ['var(--font-gt-america)', 'monospace'],
      },
    },
  },
  plugins: [],
}