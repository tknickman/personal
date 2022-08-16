import { useEffect } from "react";
import LogRocket from "logrocket";

const useLogRocket = (siteId: string): void => {
  useEffect(() => {
    if (process.env.NEXT_PUBLIC_LOG_ROCKET_ENABLED === "true") {
      LogRocket.init(siteId);
    }
  }, [siteId]);
};

export default useLogRocket;
