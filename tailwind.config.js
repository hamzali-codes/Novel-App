/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        crimson: ['"Crimson Pro"', 'serif'],
        changa: ['"Changa"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
