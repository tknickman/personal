import { trackGoal } from "fathom-client";
import clsx from "clsx";

import { LinkItem } from "../config";
import goals from "../lib/fathomGoals";
import Anchor from "./Anchor";
import Button from "./Button";

const Item = ({
  hoverColor,
  linkItem,
  selectedItem,
  setSelectedItem,
  setShow,
}: {
  hoverColor: string;
  linkItem: LinkItem;
  selectedItem: LinkItem | null;
  setSelectedItem: (item: LinkItem | null) => void;
  setShow: (show: boolean) => void;
}) => {
  // temporary UX for under construction portfolio
  let Element: typeof Anchor | typeof Button = Anchor;
  if (linkItem.key === "portfolio") {
    Element = Button;
  }

  return (
    <Element
      href={linkItem.url}
      onClick={() => {
        trackGoal(goals[`${linkItem.key}Click` as keyof typeof goals], 0);
        if (linkItem.key === "portfolio") {
          setShow(true);
        }
      }}
      onMouseEnter={() => {
        setSelectedItem(linkItem);
      }}
      onMouseLeave={() => setSelectedItem(null)}
      key={linkItem.key}
      className={clsx(
        "relative flex items-center space-x-3 rounded-lg border-2 bg-white px-6 py-5 text-left shadow-sm transition-colors",
        "dark:ring-offset-dark ring-offset-light focus-within:ring-4 focus-within:ring-offset-4",
        linkItem.ringColor,
        "dark:bg-dark",
        {
          [hoverColor]: hoverColor && selectedItem?.key === linkItem.key,
          "dark:border-gray-500":
            !hoverColor || selectedItem?.key !== linkItem.key,
        }
      )}
    >
      <div className="shrink-0">
        <div className="h-10 w-10 rounded-full">
          <linkItem.Icon className={linkItem.textColor} />
        </div>
      </div>
      <div className="min-w-0 flex-1">
        <span className="absolute inset-0" aria-hidden="true" />
        <p
          className={clsx(
            "text-dark text-sm font-medium",
            "dark:text-gray-200"
          )}
        >
          {linkItem.name}
        </p>
        <p
          className={clsx(
            "truncate text-sm text-gray-500",
            "dark:text-gray-500"
          )}
        >
          {linkItem.username}
        </p>
      </div>
    </Element>
  );
};

export default Item;
