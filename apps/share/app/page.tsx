"use client";

import { useState, FormEvent, MouseEvent, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import clsx from "clsx";
import { ChevronRightIcon } from "@heroicons/react/solid";
import { PhotographIcon } from "@heroicons/react/outline";
import { trackGoal } from "fathom-client";
import { Button } from "@tek/ui";
import config from "../config";

import goals from "../lib/fathomGoals";

const redirect = (key: string): void => {
  window.location.href = `/${config.ASSET_FOLDER}/${key}`;
};

const Home = () => {
  const params = useSearchParams();
  const [key, setKey] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const asset = params.get("asset");

  useEffect(() => {
    if (asset) {
      redirect(asset as string);
    }
  }, [asset]);

  const jumpToAsset = (
    e: FormEvent<HTMLFormElement> | MouseEvent<HTMLButtonElement>
  ) => {
    // prevent the form from refreshing
    e.preventDefault();
    trackGoal(goals.search, 0);
    if (!key) {
      setError(true);
    } else {
      redirect(key);
    }
  };

  return (
    <div>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-500">
            Thomas E. Knickman
          </h2>
          <p className="text-primary-600 mt-1 text-4xl font-extrabold sm:text-5xl sm:tracking-tight lg:text-6xl">
            Public Asset Directory
          </p>
          <form onSubmit={jumpToAsset}>
            <div className="relative mx-auto mt-4 rounded-md shadow-sm md:w-1/2 lg:w-1/4">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <PhotographIcon
                  className={clsx("h-5 w-5 text-gray-400", {
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
                  "sm:text-md mb-4 block w-full rounded-full border py-2 pl-10 focus:outline-none focus:ring-1 focus:ring-offset-2",
                  {
                    "border-primary-600  focus:ring-primary-600": !error,
                    "border-red-700 text-red-700 placeholder-red-700 focus:ring-red-700":
                      error,
                  }
                )}
                placeholder={error ? "This field is required!" : "asset-key"}
              />
            </div>
          </form>
          <Button
            onClick={jumpToAsset}
            rounded
            className="bg-primary-600 ring-primary-600 dark:ring-offset-dark ring-offset-light text-white"
          >
            <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
