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
  title: "Thomas Knickman - Info & Contact",
  description:
    "Contact information & general info for Thomas E. Knickman. View my experience, connect, or schedule time to talk about a new software project.",
  applicationName: "Thomas Knickman - Info & Contact",
  icons,
  themeColor: tailwind.theme.extend.colors.primary,
  manifest: "/site.webmanifest",
  twitter: {
    creator: "@tknickman",
  },
  creator: "Thomas Knickman",
  authors: [
    { name: "Thomas Knickman", url: "https://tomk.info?rel=site-meta" },
  ],
};
