import "tailwindcss/tailwind.css";
import { AppProps } from "next/app";
import { NextSeo } from "next-seo";
import { DarkModeToggle, ThemeContext } from "@tek/ui";
import { useFathom, getDomains } from "@tek/utils";
import Head from "next/head";
import clsx from "clsx";

import { theme } from "../tailwind.config";
import SEO from "../next-seo.config";
import { trackGoal } from "fathom-client";
import goals from "../lib/fathomGoals";

const hostnames = process.env.NEXT_PUBLIC_FATHOM_TRACKING_DOMAINS;
const fathomSiteId = process.env.NEXT_PUBLIC_FATHOM_TRACKING_ID;
const fathomUrl = process.env.NEXT_PUBLIC_FATHOM_TRACKING_URL;

function MyApp({ Component, pageProps }: AppProps) {
  useFathom(fathomSiteId as string, {
    url: fathomUrl,
    includedDomains: getDomains({ hostnames }),
  });

  return (
    <ThemeContext
      onSetDarkMode={() => trackGoal(goals.setDarkMode, 0)}
      onSetLightMode={() => trackGoal(goals.setLightMode, 0)}
      toggleConfig={{
        sunColor: theme.extend.colors.accent,
        moonColor: theme.extend.colors.primary,
      }}
    >
      <Head>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/safari-pinned-tab.svg"
          color={theme.extend.colors.accent}
        />
        <meta
          name="msapplication-TileColor"
          content={theme.extend.colors.accent}
        />
        <meta name="theme-color" content={theme.extend.colors.accent} />
      </Head>
      <NextSeo {...SEO} />
      <div
        className={clsx(
          "min-h-screen bg-gray-100 transition-colors",
          "dark:bg-gray-900"
        )}
      >
        <div className="absolute top-0 right-0 p-5">
          <DarkModeToggle />
        </div>
        <Component {...pageProps} />
      </div>
    </ThemeContext>
  );
}

export default MyApp;
