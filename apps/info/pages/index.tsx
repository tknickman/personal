import clsx from "clsx";
import Header from "../components/Header";
import config, { LinkItem } from "../config";
import { trackGoal } from "fathom-client";
import goals from "../lib/fathomGoals";

const { LINKS } = config;

const Home = ({
  hoverColor,
  selectedItem,
  setSelectedItem,
}: {
  hoverColor: string;
  selectedItem: LinkItem | null;
  setSelectedItem: (item: LinkItem | null) => void;
}) => (
  <>
    <Header />
    <main className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {LINKS.map((link) => (
        <a
          href={link.url}
          target="_blank"
          rel="noreferrer"
          onClick={() =>
            trackGoal(goals[`${link.key}Click` as keyof typeof goals], 0)
          }
          onMouseEnter={() => {
            setSelectedItem(link);
          }}
          onMouseLeave={() => setSelectedItem(null)}
          key={link.key}
          className={clsx(
            "relative flex items-center px-6 py-5 space-x-3 bg-white border-2 rounded-lg shadow-sm transition-colors",
            "focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary",
            "dark:bg-gray-900",
            {
              [hoverColor]: hoverColor && selectedItem?.key === link.key,
              "dark:border-gray-500":
                !hoverColor || selectedItem?.key !== link.key,
            }
          )}
        >
          <div className="shrink-0">
            <div className="w-10 h-10 rounded-full">
              <link.Icon color={link.textColor} />
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <span className="absolute inset-0" aria-hidden="true" />
            <p
              className={clsx(
                "text-sm font-medium text-gray-900",
                "dark:text-gray-200"
              )}
            >
              {link.name}
            </p>
            <p
              className={clsx(
                "text-sm text-gray-500 truncate",
                "dark:text-gray-500"
              )}
            >
              {link.username}
            </p>
          </div>
        </a>
      ))}
    </main>
  </>
);

export default Home;
