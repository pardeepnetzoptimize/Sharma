/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        maroon: {
          700: "#6d0019",
          800: "#4a0011",
          900: "#2e000b",
        },
      },
    },
  },
  plugins: [],
};
