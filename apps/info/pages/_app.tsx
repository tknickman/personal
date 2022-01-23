import "tailwindcss/tailwind.css";
import { AppProps } from "next/app";
import { useState } from "react";
import clsx from "clsx";
import { NextSeo } from "next-seo";
import Head from "next/head";
import { DarkModeToggle } from "@tek/ui";
import { getDomains, useFathom } from "@tek/utils";
import { trackGoal } from "fathom-client";
import goals from "../lib/fathomGoals";

import { theme } from "../tailwind.config";
import SEO from "../next-seo.config";
import config, { LinkItem } from "../config";

const hostnames = process.env.NEXT_PUBLIC_FATHOM_TRACKING_DOMAINS;
const fathomSiteId = process.env.NEXT_PUBLIC_FATHOM_TRACKING_ID;
const fathomUrl = process.env.NEXT_PUBLIC_FATHOM_TRACKING_URL;

const { THEMES } = config;

function MyApp({ Component, pageProps }: AppProps) {
  useFathom(fathomSiteId as string, {
    url: fathomUrl,
    includedDomains: getDomains({ hostnames }),
  });
  const [selectedItem, setSelectedItem] = useState<LinkItem | null>(null);
  const hoverColor = selectedItem ? selectedItem.borderColor : "border-primary";

  return (
    <>
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
          "flex flex-col justify-center min-h-screen p-8 border-8 bg-gray-100 transition-colors",
          "dark:bg-gray-900",
          hoverColor
        )}
      >
        <DarkModeToggle
          className="absolute top-0 right-0 p-5"
          themes={THEMES}
          onSetDarkMode={() => trackGoal(goals.setDarkMode, 0)}
          onSetLightMode={() => trackGoal(goals.setLightMode, 0)}
          moonColor={theme.extend.colors.primary}
          sunColor={theme.extend.colors.primary}
        />
        <Component
          hoverColor={hoverColor}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
          {...pageProps}
        />
      </div>
    </>
  );
}

export default MyApp;
