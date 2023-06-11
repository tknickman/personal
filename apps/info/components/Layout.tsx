"use client";

import { ReactNode } from "react";
import { ThemeProvider } from "next-themes";
import clsx from "clsx";
import { DarkModeToggle } from "@tek/ui";
import HighlightRouting, { useHighlight } from "../contexts/HighlightContext";

export function Layout({ children }: { children: ReactNode }) {
  const { borderColorClassName } = useHighlight();
  return (
    <div
      className={clsx(
        "bg-light flex min-h-screen flex-col justify-center border-8 p-8 transition-colors",
        "dark:bg-dark",
        borderColorClassName
      )}
    >
      <div className="absolute top-0 right-0 p-5">
        <DarkModeToggle
          triggerClassName={clsx(
            "shadow-xl hover:text-gray-600 text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-md dark:hover:text-gray-200"
          )}
          menuClassName="shadow-xl divide-y dark:divide-gray-900"
          itemClassName={clsx(
            "text-gray-500 dark:text-gray-400 dark:bg-gray-800",
            // hover
            "hover:text-gray-700 dark:hover:text-gray-200",
            // disabled
            "disabled:text-gray-400 dark:disabled:text-gray-600"
          )}
          activeClassName="text-primary dark:text-primary dark:disabled:text-primary disabled:text-primary disabled:opacity-50"
        />
      </div>
      {children}
    </div>
  );
}

export default function WithProviders({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" disableTransitionOnChange>
      <HighlightRouting>
        <Layout>{children}</Layout>
      </HighlightRouting>
      <div className="hidden">
        <a rel="me" href="https://mastodon.social/@tknickman">
          Mastodon
        </a>
      </div>
    </ThemeProvider>
  );
}
