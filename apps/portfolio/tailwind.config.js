const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./components/**/*.tsx",
    "./contexts/**/*.tsx",
    "./pages/**/*.tsx",
    "./_posts/*.md",
    "./_tags/*.md",
  ],
  safelist: ["fill-current"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Visia Pro"],
        outline: ["Visia Pro Outline"],
      },
      colors: {
        dark: colors.gray[800],
        light: colors.white,
        surveymonkey: "#00BF6F",
        momentive: "#02B5F7",
        underarmour: "#D82739",
        teknologist: "#F96F5D",
        probot: "#00B0D7",
        nextjs: "#0070F3",
        turborepo: "#A56193",
        storybook: "#FF4785",
        testinglibrary: "#FC4544",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
