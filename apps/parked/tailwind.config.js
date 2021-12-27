const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./hooks/**/*.{js,ts,jsx,tsx}",
    "./config.js",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: colors.sky,
        secondary: colors.white,
        accent: "#F96F5D",
      },
    },
  },
  plugins: [],
};
