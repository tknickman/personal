import "tailwindcss/tailwind.css";
import WithProviders from "../components/Layout";
import { Fathom } from "@tek/utils/client";
import { getDomains } from "@tek/utils/server";

const hostnames = process.env.NEXT_PUBLIC_FATHOM_TRACKING_DOMAINS;
const fathomSiteId = process.env.NEXT_PUBLIC_FATHOM_TRACKING_ID;
const fathomUrl = process.env.NEXT_PUBLIC_FATHOM_TRACKING_URL;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // suppressHydrationWarning for next-themes
    <html lang="en" suppressHydrationWarning>
      <body>
        <Fathom
          siteId={fathomSiteId as string}
          options={{
            url: fathomUrl,
            includedDomains: getDomains({ hostnames }),
          }}
        />
        <WithProviders>{children}</WithProviders>
      </body>
    </html>
  );
}

// SEO
export { metadata } from './metadata'
