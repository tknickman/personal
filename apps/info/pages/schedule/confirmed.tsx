import { Anchor } from "@tek/ui";
import { HomeIcon } from "@heroicons/react/outline";

export default function ThankYou() {
  return (
    <div>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <h2 className="text-primary text-base font-semibold uppercase tracking-wide">
            Booking Confirmed
          </h2>
          <h1 className="light:text-dark dark:text-light mt-1 text-4xl font-extrabold sm:text-5xl sm:tracking-tight lg:text-6xl">
            Thank You
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-gray-500 dark:text-gray-400">
            I look forward to connecting with you soon!
          </p>
        </div>
        <div className="text-center border-t border-gray-600 mt-6 w-1/2 mx-auto">
          <Anchor
            href="/"
            className="bg-dark dark:bg-primary hover:ring-primary dark:hover:ring-offset-dark text-white hover:ring-offset-white mt-6"
          >
            <HomeIcon className="mr-3 -ml-1 h-5 w-5" aria-hidden="true" />
            About me
          </Anchor>
        </div>
      </div>
    </div>
  );
}
