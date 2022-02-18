const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./hooks/**/*.{js,ts,jsx,tsx}",
    "./config.{js,ts}",
    // ui libraries (looks up two levels because yarn workspaces installs at root)
    "../../node_modules/@tek/ui/dist/**/*.{js,mjs,ts,jsx,tsx}",
    "../../node_modules/@tek/utils/dist/**/*.{js,mjs,ts,jsx,tsx}",
    "../../node_modules/@tek/icons/dist/**/*.{js,mjs,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        dark: colors.gray[900],
        light: colors.gray[100],
        primary: colors.sky,
        secondary: colors.white,
      },
    },
  },
  plugins: [],
};
