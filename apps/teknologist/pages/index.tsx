import { MailIcon } from "@heroicons/react/outline";
import clsx from "clsx";
import { trackGoal } from "fathom-client";

import Footer from "../components/Footer";
import Logo from "../components/Logo";
import goals from "../lib/fathomGoals";

const MARKETING_PREFIX = "landingCTA";

// don't spam me?
const EMAIL_DATA = {
  account: "tom",
  domain: "teknologist.co",
  subject: "Reaching out from teknologist.co",
};

const onContact = () => {
  trackGoal(goals.contactClick, 0);
  window.location.assign(
    `mailto:${EMAIL_DATA.account}+${MARKETING_PREFIX}@${EMAIL_DATA.domain}?subject=${EMAIL_DATA.subject}`
  );
};

export default function Home() {
  return (
    <div>
      <div className="grid justify-items-center md:justify-items-start">
        <div className="w-20 mt-4 ml-0 md:ml-4">
          <Logo />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center min-h-full py-2 text-primary dark:text-white">
        <main>
          <div className="px-4 py-48 mx-auto max-w-7xl sm:py-64 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-base font-semibold tracking-wide uppercase text-accent">
                TEKnologist LLC
              </h2>
              <p className="mt-1 text-4xl font-extrabold sm:text-5xl sm:tracking-tight lg:text-6xl">
                Bringing{" "}
                <span className="underline decoration-accent">ideas</span> to{" "}
                <span className="underline decoration-accent">life</span>
              </p>
              <p className="max-w-xl mx-auto mt-5 text-xl text-black-500">
                Modern web development<span className="text-accent">.</span> MVP
                design<span className="text-accent">.</span> Product guidance
                <span className="text-accent">.</span>
              </p>
              <div className="mt-8">
                <button
                  onClick={onContact}
                  className={clsx(
                    "inline-flex",
                    "items-center",
                    "px-4",
                    "py-2",
                    "text-base",
                    "font-medium",
                    "text-white",
                    "border",
                    "border-transparent",
                    "rounded-md",
                    "shadow-sm",
                    "bg-primary",
                    "dark:bg-accent",
                    "hover:ring-accent",
                    "hover:ring-2",
                    "hover:ring-offset-2",
                    "hover:ring-offset-white",
                    "dark:hover:ring-offset-primary",
                    "focus:outline-none",
                    "focus:ring-2",
                    "focus:ring-offset-2",
                    "focus:ring-accent"
                  )}
                >
                  <MailIcon className="w-5 h-5 mr-3 -ml-1" aria-hidden="true" />
                  Get in touch!
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
