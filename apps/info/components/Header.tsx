import clsx from "clsx";

export default function Header() {
  return (
    <div>
      <div className="px-4 py-16 mx-auto max-w-7xl sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold tracking-wide uppercase text-primary">
            Senior Software Engineer
          </h2>
          <h1 className="mt-1 text-4xl font-extrabold light:text-gray-900 dark:text-gray-100 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Thomas E. Knickman
          </h1>
          <p
            className={clsx(
              "max-w-xl mx-auto mt-5 text-xl text-gray-500",
              "dark:text-gray-400"
            )}
          >
            learn more, or connect via one of the options below
          </p>
        </div>
      </div>
    </div>
  );
}
