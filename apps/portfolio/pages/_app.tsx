import { ThemeContext } from "@tek/ui";
import { AppProps } from "next/app";
import colors from "tailwindcss/colors";

import "../styles/index.css";

export default function MyApp({ Component, pageProps }: AppProps) {
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
}
