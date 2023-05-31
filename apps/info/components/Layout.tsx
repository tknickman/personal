"use client"

import { ReactNode } from "react";
import clsx from "clsx";
import { DarkModeToggle, ThemeContext } from "@tek/ui";
import { trackGoal } from "fathom-client";
import goals from "../lib/fathomGoals";
import tailwind from "../tailwind.config";
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
        <DarkModeToggle />
      </div>
      {children}
    </div>
  );
}

export default function WithProviders({ children }: { children: ReactNode }) {
  return (
    <ThemeContext
      onSetDarkMode={() => trackGoal(goals.setDarkMode, 0)}
      onSetLightMode={() => trackGoal(goals.setLightMode, 0)}
      toggleConfig={{
        moonColor: tailwind.theme.extend.colors.primary,
        sunColor: tailwind.theme.extend.colors.primary,
      }}
    >
      <HighlightRouting>
        <Layout>{children}</Layout>
      </HighlightRouting>
      <div className="hidden">
        <a rel="me" href="https://mastodon.social/@tknickman">
          Mastodon
        </a>
      </div>
    </ThemeContext>
  );
}
