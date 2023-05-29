export const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./config.{js,ts}",
    "./node_modules/@tek/ui/dist/**/*.{js,mjs,ts,jsx,tsx}",
    "./node_modules/@tek/utils/dist/**/*.{js,mjs,ts,jsx,tsx}",
    "./node_modules/@tek/icons/dist/**/*.{js,mjs,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#2C4251",
        accent: "#F96F5D",
        white: "#ffffff",
      },
    },
  },
  plugins: [],
};

export default config;