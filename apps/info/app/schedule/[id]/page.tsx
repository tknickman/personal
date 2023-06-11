"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useTheme } from "next-themes";
import { useEffect } from "react";
import config from "../../../tailwind.config";

export default function Schedule({ params }: { params: { id: string } }) {
  const { resolvedTheme: theme } = useTheme();
  console.log("theme", theme);

  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        theme: theme as "dark" | "light",
        styles: {
          body: {
            background:
              theme === "dark"
                ? config.theme.extend.colors.dark
                : config.theme.extend.colors.light,
          },
          branding: { brandColor: config.theme.extend.colors.primary },
        },
        hideEventTypeDetails: false,
      });
    })();
  }, [theme]);

  return (
    <Cal
      calLink={`tknickman/${params.id}`}
      style={{ width: "100%", height: "100%", overflow: "scroll" }}
    />
  );
}
