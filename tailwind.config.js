/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        aktiv: ["Aktiv Grotesk Corp", "sans-serif"],
      },
      colors: {
        black: "#202028",
      },
    },
  },
  plugins: [],
};
