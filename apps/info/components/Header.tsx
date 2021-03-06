import clsx from "clsx";

export default function Header() {
  return (
    <div>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-primary text-base font-semibold uppercase tracking-wide">
            Senior Software Engineer
          </h2>
          <h1 className="light:text-dark dark:text-light mt-1 text-4xl font-extrabold sm:text-5xl sm:tracking-tight lg:text-6xl">
            Thomas E. Knickman
          </h1>
          <p
            className={clsx(
              "mx-auto mt-5 max-w-xl text-xl text-gray-500",
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
