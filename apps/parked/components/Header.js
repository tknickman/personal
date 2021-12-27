import { useHostName } from "@tek/utils";

export default function Header() {
  const hostName = useHostName();
  return (
    <div>
      <div className="px-4 py-4 mx-auto max-w-7xl sm:py-8 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold tracking-wide uppercase text-primary-500">
            {hostName}
          </h2>
          <h1 className="mt-1 text-4xl font-extrabold text-gray-800 dark:text-gray-100 sm:text-5xl sm:tracking-tight lg:text-6xl">
            This site has been retired
          </h1>
        </div>
      </div>
    </div>
  );
}
