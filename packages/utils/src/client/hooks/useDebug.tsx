import { useRouter } from "next/router";

const useDebug = (vals: Array<unknown>): void => {
  const { query } = useRouter();

  if (query.debug === "true") {
    console.info(vals);
  }
};

export default useDebug;
