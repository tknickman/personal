"use client";

import { trackGoal } from "fathom-client";
import goals from "../lib/fathomGoals";
import { Anchor } from "@tek/ui";

export default function FourOhFour() {
  return (
    <div className="min-h-screen px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
      <div className="mx-auto max-w-max">
        <main className="sm:flex">
          <p className="text-primary-600 text-4xl font-extrabold sm:text-5xl">
            404
          </p>
          <div className="sm:ml-6">
            <div className="sm:border-l sm:border-gray-200 sm:pl-6">
              <h1 className="text-primary-600 text-4xl font-extrabold tracking-tight sm:text-5xl">
                Page not found
              </h1>
              <p className="mt-1 text-base text-gray-500">
                Please check the URL in the address bar and try again.
              </p>
            </div>
            <div className="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
              <Anchor
                href="/"
                className="bg-primary-600 ring-primary-600 ring-offset-light dark:ring-offset-dark text-white"
              >
                Home
              </Anchor>
              <Anchor
                onClick={() => trackGoal(goals.contactClick, 0)}
                href="https://www.tomk.info?ref=apps/share"
                className="border-primary-700 text-primary-700 ring-primary-700 dark:ring-light ring-offset-light dark:ring-offset-dark bg-white"
              >
                Get in Touch
              </Anchor>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
