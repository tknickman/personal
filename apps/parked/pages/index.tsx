import clsx from "clsx";
import Header from "../components/Header";
import ButtonLink from "../components/Button";
import { CodeIcon, InformationCircleIcon } from "@heroicons/react/outline";
import { trackGoal } from "fathom-client";

import goals from "../lib/fathomGoals";

const ParkedLandingPage = ({ hostName }: { hostName?: string }) => (
  <>
    <Header />
    <main className={clsx("grid")}>
      <div className="max-w-lg mx-auto mt-2 text-base text-center text-gray-500 dark:text-gray-300">
        <p>This site has run its course, and has been shutdown.</p>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          If you found this site useful, please reach out to me below - I would
          love to hear from you. The original source has also been made
          available below.
        </p>
        <div className="mt-12">
          <ButtonLink
            onClick={() => trackGoal(goals.sourceClick, 0)}
            className={clsx(
              "text-gray-700",
              "bg-white",
              "border-primary-500",
              "hover:bg-gray-100"
            )}
            href={
              hostName && `https://www.github.com/tknickman/${hostName}.com`
            }
          >
            <CodeIcon
              className={clsx("w-5", "h-5", "mr-2", "-ml-1")}
              aria-hidden="true"
            />
            View Source
          </ButtonLink>
        </div>
        <div className="mt-2">
          <ButtonLink
            onClick={() => trackGoal(goals.contactClick, 0)}
            className={clsx(
              "text-white",
              "bg-primary-600",
              "border-white",
              "hover:bg-primary-700"
            )}
            href="https://www.tomk.info"
          >
            <InformationCircleIcon
              className={clsx("w-5", "h-5", "mr-2", "-ml-1")}
              aria-hidden="true"
            />
            Get in Touch
          </ButtonLink>
        </div>
      </div>
    </main>
  </>
);

export default ParkedLandingPage;
