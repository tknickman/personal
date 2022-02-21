import { useState } from "react";
import { motion } from "framer-motion";

import CommitCount from "./CommitCount";
import { OpenSourceType } from "../types";
import { PR_FILTER, EMOJI_KEY } from "../constants";

const getRotation = () => {
  const val = Math.random() * (1 - -1) + -1;
  if (val >= 0) {
    return 0.5;
  }
  return -0.5;
};

const RepoCard = ({
  Icon,
  org,
  repo,
  contribution,
  color,
  background,
  commitCount,
  href,
}: OpenSourceType) => {
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const linkData = {
    href: `${href}/pulls/?q=${PR_FILTER}`,
    target: "_blank",
    rel: "noopener noreferrer",
  };

  return (
    <motion.div
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      whileHover={{ scale: 1.05, rotate: getRotation(), borderColor: color }}
      className="shadow-l border-dark w-100 relative flex h-36 w-52 flex-col items-center justify-center rounded-md border-2 p-2 text-center"
    >
      <CommitCount
        commitCount={commitCount}
        isHovering={isHovering}
        background={background}
        linkData={linkData}
      />
      <a className="my-auto flex basis-2/4 items-center" {...linkData}>
        <Icon className="h-16 w-16" />
      </a>
      <a className="basis-1/4 font-mono text-xs hover:underline" {...linkData}>
        <span className="opacity-50">{org}/</span>
        {repo}
      </a>
      <a
        className="basis-1/4 hover:opacity-70"
        href="https://allcontributors.org/docs/en/emoji-key"
        target="_blank"
        rel="noopener noreferrer"
      >
        {contribution.map((item) => EMOJI_KEY[item])}
      </a>
    </motion.div>
  );
};

export default RepoCard;
