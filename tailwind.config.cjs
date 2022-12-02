/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        94: "23.5rem",
        100: "25rem",
      },
      transitionDelay: {
        3000: "3000ms",
      },
      translate: {
        // "100/3": "0%",
      },
    },
    fontFamily: {
      "noto-sans-jp": ["Noto Sans JP", "sans-serif"],
    },
  },
  plugins: [],
};
