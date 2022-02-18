import clsx from "clsx";
import Header from "../components/Header";
import { CodeIcon, InformationCircleIcon } from "@heroicons/react/outline";
import { trackGoal } from "fathom-client";
import { Anchor } from "@tek/ui";

import goals from "../lib/fathomGoals";

const ParkedLandingPage = ({ hostName }: { hostName?: string }) => (
  <>
    <Header />
    <main className={clsx("grid")}>
      <div className="mx-auto mt-2 max-w-lg text-center text-base text-gray-500 dark:text-gray-300">
        <p>This site has run its course, and has been shutdown.</p>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          If you found this site useful, please reach out to me below - I would
          love to hear from you. The original source has also been made
          available below.
        </p>
        <div className="mt-12">
          <Anchor
            onClick={() => trackGoal(goals.sourceClick, 0)}
            className="border-primary-700 ring-offset-light dark:ring-offset-dark ring-primary-700 bg-white text-gray-700 dark:ring-white"
            target="_blank"
            href={
              hostName && `https://www.github.com/tknickman/${hostName}.com`
            }
          >
            <CodeIcon
              className={clsx("w-5", "h-5", "mr-2", "-ml-1")}
              aria-hidden="true"
            />
            View Source
          </Anchor>
        </div>
        <div className="mt-2">
          <Anchor
            onClick={() => trackGoal(goals.contactClick, 0)}
            className="bg-primary-600 ring-offset-light dark:ring-offset-dark ring-primary-700 text-white"
            target="_blank"
            href="https://www.tomk.info?ref=apps/parked"
          >
            <InformationCircleIcon
              className={clsx("w-5", "h-5", "mr-2", "-ml-1")}
              aria-hidden="true"
            />
            Get in Touch
          </Anchor>
        </div>
      </div>
    </main>
  </>
);

export default ParkedLandingPage;
