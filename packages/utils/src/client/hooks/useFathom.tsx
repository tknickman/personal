import { useEffect } from "react";
import { useRouter } from "next/router";
import { load, trackPageview, LoadOptions } from "fathom-client";

const useFathom = (siteId: string, options: LoadOptions): void => {
  const router = useRouter();

  useEffect(() => {
    load(siteId, options);

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
