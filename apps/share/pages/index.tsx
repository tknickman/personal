import { useState } from "react";
import Head from "next/head";
import { ChevronRightIcon } from "@heroicons/react/solid";
import { PhotographIcon } from "@heroicons/react/outline";
import clsx from "clsx";

const ASSET_FOLDER = "embeds";

export default function Home() {
  const [key, setKey] = useState("");
  const [error, setError] = useState(false);

  const jumpToAsset = () => {
    if (!key) {
      setError(true);
    } else {
      window.location.href = `/${ASSET_FOLDER}/${key}`;
    }
  };

  return (
    <div>
      <Head>
        <title>TEK - Public Asset Directory</title>
      </Head>
      <div className="px-4 py-16 mx-auto max-w-7xl sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold tracking-wide text-gray-500 uppercase dark:text-gray-500">
            Thomas E. Knickman
          </h2>
          <p className="mt-1 text-4xl font-extrabold text-primary-600 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Public Asset Directory
          </p>
          <form>
            <div className="relative w-1/4 mx-auto mt-4 rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <PhotographIcon
                  className={clsx("w-5 h-5 text-gray-400", {
                    "text-red-700": error,
                  })}
                  aria-hidden="true"
                />
              </div>
              <input
                type="text"
                name="key"
                value={key}
                onChange={(e) => {
                  setError(false);
                  setKey(e.target.value);
                }}
                id="key"
                className={clsx(
                  "focus:outline-none block w-full pl-10 py-2 sm:text-md rounded-full border focus:ring-offset-2 focus:ring-1",
                  {
                    "border-primary-600  focus:ring-primary-600": !error,
                    "border-red-700 text-red-700 focus:ring-red-700 placeholder-red-700":
                      error,
                  }
                )}
                placeholder={error ? "This field is required!" : "asset-key"}
              />
            </div>
          </form>
          <button
            onClick={jumpToAsset}
            type="button"
            className="inline-flex items-center p-2 mt-4 text-white border border-transparent rounded-full shadow-sm bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
          >
            <ChevronRightIcon className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}
