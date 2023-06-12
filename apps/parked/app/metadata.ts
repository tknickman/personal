import type { Metadata } from "next";
import tailwind from "../tailwind.config";

const icons: Metadata["icons"] = [
  {
    rel: "apple-touch-icon",
    sizes: "180x180",
    url: "/apple-touch-icon.png",
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    url: "/favicon-32x32.png",
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
    url: "/favicon-16x16.png",
  },
  {
    rel: "mask-icon",
    url: "/safari: -pinned-tab.svg",
  },
];

export const metadata: Metadata = {
  title: "Parked",
  description:
    "Retired website. View the original source on github, or contact Thomas Knickman, the original author.",
  applicationName: "Parked Site",
  icons,
  themeColor: tailwind.theme.extend.colors.primary["500"],
  manifest: "/site.webmanifest",
  twitter: {
    creator: "@tknickman",
  },
  creator: "Thomas Knickman",
  authors: [
    { name: "Thomas Knickman", url: "https://tomk.info?rel=site-meta" },
  ],
};
