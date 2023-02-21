import "tailwindcss/tailwind.css";
import { AppProps } from "next/app";
import { useState } from "react";
import clsx from "clsx";
import { NextSeo } from "next-seo";
import Head from "next/head";
import { DarkModeToggle, ThemeContext } from "@tek/ui";
import { getDomains, useFathom, useLogRocket } from "@tek/utils";
import { trackGoal } from "fathom-client";
import goals from "../lib/fathomGoals";

import { theme } from "../tailwind.config";
import SEO from "../next-seo.config";
import { LinkItem } from "../config";

const hostnames = process.env.NEXT_PUBLIC_FATHOM_TRACKING_DOMAINS;
const fathomSiteId = process.env.NEXT_PUBLIC_FATHOM_TRACKING_ID;
const logRocketSiteId = process.env.NEXT_PUBLIC_LOG_ROCKET_SITE_ID;
const fathomUrl = process.env.NEXT_PUBLIC_FATHOM_TRACKING_URL;

function MyApp({ Component, pageProps }: AppProps) {
  useLogRocket(logRocketSiteId as string);
  useFathom(fathomSiteId as string, {
    url: fathomUrl,
    includedDomains: getDomains({ hostnames }),
  });
  const [selectedItem, setSelectedItem] = useState<LinkItem | null>(null);
  const hoverColor = selectedItem ? selectedItem.borderColor : "border-primary";

  return (
    <ThemeContext
      onSetDarkMode={() => trackGoal(goals.setDarkMode, 0)}
      onSetLightMode={() => trackGoal(goals.setLightMode, 0)}
      toggleConfig={{
        moonColor: theme.extend.colors.primary,
        sunColor: theme.extend.colors.primary,
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
          color={theme.extend.colors.primary}
        />
        <meta
          name="msapplication-TileColor"
          content={theme.extend.colors.primary}
        />
        <meta name="theme-color" content={theme.extend.colors.primary} />
      </Head>
      <NextSeo {...SEO} />
      <div
        className={clsx(
          "bg-light flex min-h-screen flex-col justify-center border-8 p-8 transition-colors",
          "dark:bg-dark",
          hoverColor
        )}
      >
        <div className="absolute top-0 right-0 p-5">
          <DarkModeToggle />
        </div>
        <Component
          hoverColor={hoverColor}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
          {...pageProps}
        />
      </div>
      <div className="hidden">
        <a rel="me" href="https://mastodon.social/@tknickman">
          Mastodon
        </a>
      </div>
    </ThemeContext>
  );
}

export default MyApp;
