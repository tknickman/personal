import clsx from "clsx";
import { linkData } from "../types";

const CommitCount = ({
  isHovering,
  commitCount,
  background,
  linkData,
}: {
  isHovering: boolean;
  commitCount: number;
  background: string;
  linkData: linkData;
}) => {
  if (isHovering) {
    return (
      <a
        title={`${commitCount} accepted pull request${
          commitCount > 1 ? "s" : ""
        }`}
        className={clsx(
          "text-light dark:text-dark absolute top-2 right-2 h-6 w-6 rounded-full font-bold shadow-2xl",
          background
        )}
        {...linkData}
      >
        {commitCount}
      </a>
    );
  }

  return null;
};

export default CommitCount;
