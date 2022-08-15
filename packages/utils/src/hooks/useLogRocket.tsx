import { useEffect } from "react";
import LogRocket from "logrocket";

const useLogRocket = (siteId: string): void => {
  useEffect(() => {
    if (process.env.LOGROCKET_ENABLED === "true") {
      LogRocket.init(siteId);
    }
  }, [siteId]);
};

export default useLogRocket;
