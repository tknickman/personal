import { MailIcon } from "@heroicons/react/outline";
import { trackGoal } from "fathom-client";
import { Button } from "@tek/ui";

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
        <div className="mt-4 ml-0 w-20 md:ml-4">
          <Logo />
        </div>
      </div>
      <div className="text-primary flex min-h-full flex-col items-center justify-center py-2 dark:text-white">
        <main>
          <div className="mx-auto max-w-7xl px-4 py-48 sm:py-64 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-accent text-base font-semibold uppercase tracking-wide">
                TEKnologist LLC
              </h2>
              <p className="mt-1 text-4xl font-extrabold sm:text-5xl sm:tracking-tight lg:text-6xl">
                Bringing{" "}
                <span className="decoration-accent underline">ideas</span> to{" "}
                <span className="decoration-accent underline">life</span>
              </p>
              <p className="text-black-500 mx-auto mt-5 max-w-xl text-xl">
                Modern web development<span className="text-accent">.</span> MVP
                design<span className="text-accent">.</span> Product guidance
                <span className="text-accent">.</span>
              </p>
              <div className="mt-8">
                <Button
                  onClick={onContact}
                  className="bg-primary dark:hover:ring-offset-primary text-white hover:ring-offset-white"
                >
                  <MailIcon className="mr-3 -ml-1 h-5 w-5" aria-hidden="true" />
                  Get in touch!
                </Button>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
