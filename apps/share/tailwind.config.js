const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./hooks/**/*.{js,ts,jsx,tsx}",
    "./config.{js,ts}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: colors.emerald,
        secondary: colors.white,
      },
    },
  },
  plugins: [],
};
