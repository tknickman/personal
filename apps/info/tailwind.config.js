module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./hooks/**/*.{js,ts,jsx,tsx}",
    "./config.js",
  ],
  darkMode: "class",
  safelist: ["fill-current"],
  theme: {
    extend: {
      colors: {
        primary: "#F96F5D",
        portfolio: "#5DD39E",
        instagram: "#DD2A7B",
        linkedin: "#0E76A8",
        github: "#6e5494",
        stackoverflow: "#F48024",
        teknologist: "#2C4252",
        email: "#FFC43D",
      },
    },
  },
  plugins: [],
};
