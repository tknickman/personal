import { useEffect, useState } from "react";
import getHostFromHostName from "../getHostFromHostName";

const useHostName = (): string | null => {
  const [hostName, setHostName] = useState<string | null>(null);

  useEffect(() => {
    const hostname = window?.location?.hostname;
    setHostName(getHostFromHostName({ hostName: hostname }));
  }, []);

  return hostName;
};

export default useHostName;
