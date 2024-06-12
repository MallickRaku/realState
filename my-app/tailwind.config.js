/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryBackground: "#f2ece4",
        customColor: "rgba(234, 225, 225, 0.7)",
      },

      rotate: {
        full: "360deg",
        minus90: "-90deg",
      },
    },
  },
  plugins: [],
};
