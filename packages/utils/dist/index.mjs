// src/hooks/useFathom.tsx
import { useEffect } from "react";
import { useRouter } from "next/router";
import { load, trackPageview } from "fathom-client";
var useFathom = ({
  includedDomains
}) => {
  const router = useRouter();
  useEffect(() => {
    load(process.env.NEXT_PUBLIC_FATHOM_TRACKING, {
      includedDomains
    });
    function onRouteChangeComplete() {
      trackPageview();
    }
    router.events.on("routeChangeComplete", onRouteChangeComplete);
    return () => {
      router.events.off("routeChangeComplete", onRouteChangeComplete);
    };
  }, []);
};
var useFathom_default = useFathom;

// src/hooks/useHostName.tsx
import { useEffect as useEffect2, useState } from "react";

// src/getHostFromHostName.ts
var getHostFromHostName = ({
  hostName
}) => {
  if (hostName) {
    const host = hostName.startsWith("www.") ? hostName.slice(4) : hostName;
    return host.split(".")[0];
  }
  return null;
};
var getHostFromHostName_default = getHostFromHostName;

// src/hooks/useHostName.tsx
var useHostName = () => {
  const [hostName, setHostName] = useState(null);
  useEffect2(() => {
    var _a;
    const hostname = (_a = window == null ? void 0 : window.location) == null ? void 0 : _a.hostname;
    setHostName(getHostFromHostName_default({ hostName: hostname }));
  }, []);
  return hostName;
};
var useHostName_default = useHostName;

// src/getDomains.ts
var getDomains = ({ hostnames }) => {
  return hostnames.split(",").flatMap((host) => [host, `www.${host}`]);
};
var getDomains_default = getDomains;
export {
  getDomains_default as getDomains,
  getHostFromHostName_default as getHostFromHostName,
  useFathom_default as useFathom,
  useHostName_default as useHostName
};
