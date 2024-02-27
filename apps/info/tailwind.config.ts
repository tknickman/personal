import colors from "tailwindcss/colors";

const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./hooks/**/*.{js,ts,jsx,tsx}",
    "./config.ts",
    "./node_modules/@tek/ui/dist/**/*.{js,mjs,ts,jsx,tsx}",
    "./node_modules/@tek/utils/dist/**/*.{js,mjs,ts,jsx,tsx}",
    "./node_modules/@tek/icons/dist/**/*.{js,mjs,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        light: colors.gray[100],
        dark: colors.gray[900],
        primary: "#F96F5D",
        portfolio: "#5DD39E",
        "twitter-x": "#000000",
        instagram: "#DD2A7B",
        linkedin: "#0E76A8",
        github: "#6e5494",
        stackoverflow: "#F48024",
        teknologist: "#2C4252",
        email: "#FFC43D",
        resume: "#903427",
      },
    },
  },
  plugins: [],
};

export default config;
