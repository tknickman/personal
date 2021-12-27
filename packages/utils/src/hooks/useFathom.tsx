import { useEffect } from "react";
import { useRouter } from "next/router";
import { load, trackPageview } from "fathom-client";

const useFathom = ({
  includedDomains,
}: {
  includedDomains: Array<string>;
}): void => {
  const router = useRouter();

  useEffect(() => {
    load(process.env.NEXT_PUBLIC_FATHOM_TRACKING as string, {
      includedDomains,
    });

    function onRouteChangeComplete(): void {
      trackPageview();
    }
    // Record a pageview when route changes
    router.events.on("routeChangeComplete", onRouteChangeComplete);

    // Unassign event listener
    return () => {
      router.events.off("routeChangeComplete", onRouteChangeComplete);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useFathom;
