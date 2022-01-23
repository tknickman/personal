import clsx from "clsx";
import { AppProps } from "next/app";
import "../styles/index.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-light dark:bg-dark">
      <Component {...pageProps} />
    </div>
  );
}
