import "tailwindcss/tailwind.css";
import { AppProps } from "next/app";
import clsx from "clsx";
import { NextSeo } from "next-seo";
import { DarkModeToggle, ThemeContext } from "@tek/ui";
import { trackGoal } from "fathom-client";
import Head from "next/head";
import { useFathom, getDomains } from "@tek/utils";

// configs
import tailwind from "../tailwind.config";
import SEO from "../next-seo.config";

// other
import goals from "../lib/fathomGoals";

const hostnames = process.env.NEXT_PUBLIC_FATHOM_TRACKING_DOMAINS;
const fathomSiteId = process.env.NEXT_PUBLIC_FATHOM_TRACKING_ID;
const fathomUrl = process.env.NEXT_PUBLIC_FATHOM_TRACKING_URL;

const ShareApp = ({ Component, pageProps }: AppProps) => {
  useFathom(fathomSiteId as string, {
    url: fathomUrl,
    includedDomains: getDomains({ hostnames }),
  });

  return (
    <ThemeContext
      onSetDarkMode={() => trackGoal(goals.setDarkMode, 0)}
      onSetLightMode={() => trackGoal(goals.setLightMode, 0)}
      toggleConfig={{
        sunColor: tailwind.theme.extend.colors.secondary,
        moonColor: tailwind.theme.extend.colors.primary["600"],
      }}
    >
      <Head>
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
          color={tailwind.theme.extend.colors.primary["600"]}
        />
        <meta
          name="msapplication-TileColor"
          content={tailwind.theme.extend.colors.primary["600"]}
        />
      </Head>
      <NextSeo {...SEO} />
      <div
        className={clsx(
          "bg-light flex min-h-screen flex-col justify-center border-8 p-8 transition-colors",
          "dark:bg-dark",
          "border-primary-600"
        )}
      >
        <div className="absolute top-0 right-0 p-5">
          <DarkModeToggle
            sunColor={tailwind.theme.extend.colors.primary["600"]}
            moonColor={tailwind.theme.extend.colors.secondary}
          />
        </div>
        <Component {...pageProps} />
      </div>
    </ThemeContext>
  );
};

export default ShareApp;
