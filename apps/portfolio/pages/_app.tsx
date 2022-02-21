import { useEffect } from "react";
import { ThemeContext } from "@tek/ui";
import { AppProps } from "next/app";
import smoothscroll from "smoothscroll-polyfill";
import colors from "tailwindcss/colors";

import "../styles/index.css";

const PortfolioApp = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    smoothscroll.polyfill();
  }, []);

  return (
    <ThemeContext
      toggleConfig={{
        moonColor: colors.gray["800"],
        sunColor: "white",
      }}
    >
      <div className="bg-light dark:bg-dark">
        <Component {...pageProps} />
      </div>
    </ThemeContext>
  );
};

export default PortfolioApp;
