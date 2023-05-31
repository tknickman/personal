import { load, trackPageview, LoadOptions } from "fathom-client";
import { useEffect, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";

interface Props {
  siteId: string;
  options: LoadOptions;
}

function TrackPageView({ siteId, options }: Props): null {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    load(siteId, options);
  }, [siteId, options]);

  // Record a page view when route changes
  useEffect(() => {
    trackPageview();
  }, [pathname, searchParams]);

  return null;
}

export default function Fathom({ siteId, options }: Props) {
  return (
    <Suspense fallback={null}>
      <TrackPageView siteId={siteId} options={options} />
    </Suspense>
  );
}
