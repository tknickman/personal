import "tailwindcss/tailwind.css";
import { Analytics } from "@vercel/analytics/react";
import { AppProps } from "next/app";
import clsx from "clsx";
import { NextSeo } from "next-seo";
import { trackGoal } from "fathom-client";
import Head from "next/head";

// internal
import { DarkModeToggle, ThemeContext } from "@tek/ui";
import { useHostName, useFathom, getDomains } from "@tek/utils";

// configs
import { theme } from "../tailwind.config";
import SEO from "../next-seo.config";

// other
import goals from "../lib/fathomGoals";

const hostnames = process.env.NEXT_PUBLIC_FATHOM_TRACKING_DOMAINS;
const fathomSiteId = process.env.NEXT_PUBLIC_FATHOM_TRACKING_ID;
const fathomUrl = process.env.NEXT_PUBLIC_FATHOM_TRACKING_URL;

const ParkedApp = ({ Component, pageProps }: AppProps) => {
  const hostName = useHostName();
  useFathom(fathomSiteId as string, {
    url: fathomUrl,
    includedDomains: getDomains({ hostnames }),
  });

  return (
    <>
      <ThemeContext
        onSetDarkMode={() => trackGoal(goals.setDarkMode, 0)}
        onSetLightMode={() => trackGoal(goals.setLightMode, 0)}
        toggleConfig={{
          sunColor: theme.extend.colors.secondary,
          moonColor: theme.extend.colors.primary["500"],
        }}
      >
        <NextSeo {...SEO({ hostName })} />
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
            color={theme.extend.colors.primary["500"]}
          />
          <meta
            name="msapplication-TileColor"
            content={theme.extend.colors.primary["500"]}
          />
        </Head>
        <div
          className={clsx(
            "bg-light flex min-h-screen flex-col justify-center border-8 p-8 transition-colors",
            "dark:bg-dark",
            "border-primary-500"
          )}
        >
          <div className="absolute top-0 right-0 p-5">
            <DarkModeToggle />
          </div>
          <Component hostName={hostName} {...pageProps} />
        </div>
      </ThemeContext>
      <Analytics />
    </>
  );
};

export default ParkedApp;
