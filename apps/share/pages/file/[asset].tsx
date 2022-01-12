import { useRouter } from "next/router";
import { useEffect } from "react";
import config from "../../config";

const FileRedirect = () => {
  const router = useRouter();
  const { asset } = router.query;

  // force the redirect on the client so fathom picks it up
  useEffect(() => {
    window.location.href = `/${config.ASSET_FOLDER}/${asset}`;
  }, [asset]);

  return null;
};

export default FileRedirect;
