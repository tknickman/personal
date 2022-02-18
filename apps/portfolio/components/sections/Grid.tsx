import { Next, Probot, TestingLibrary, Storybook, IconProps } from "@tek/icons";
import { motion } from "framer-motion";
import Section from "../layout/Section";
import tailwindConfig from "../../tailwind.config";
import clsx from "clsx";
import { ReactNode, useState } from "react";

const PR_FILTER = `is:pr author:tknickman is:closed`;
const EMOJI_KEY = {
  code: "💻",
  tests: "⚠️",
  docs: "📖",
};

type OpenSourceType = {
  Icon: (props: IconProps) => JSX.Element;
  color: string;
  background: string;
  key: string;
  repo: string;
  href: string;
  org: string;
  contribution: Array<"docs" | "tests" | "code">;
  commitCount: number;
};

type linkData = {
  href: string;
  target: string;
  rel: string;
};

const OpenSource: Array<OpenSourceType> = [
  {
    Icon: Next,
    color: tailwindConfig.theme.extend.colors.nextjs,
    background: "bg-nextjs",
    key: "next",
    repo: "next.js",
    href: "https://github.com/vercel/next.js",
    org: "vercel",
    contribution: ["docs", "tests", "code"],
    commitCount: 2,
  },
  {
    Icon: Next,
    color: tailwindConfig.theme.extend.colors.turborepo,
    background: "bg-turborepo",
    key: "turborepo",
    repo: "turborepo",
    href: "https://github.com/vercel/turborepo",
    org: "vercel",
    contribution: ["docs", "code"],
    commitCount: 2,
  },
  {
    Icon: Storybook,
    color: tailwindConfig.theme.extend.colors.storybook,
    background: "bg-storybook",
    key: "storybook",
    repo: "storybook",
    href: "https://github.com/storybookjs/storybook",
    org: "storybookjs",
    contribution: ["docs"],
    commitCount: 1,
  },
  {
    Icon: TestingLibrary,
    color: tailwindConfig.theme.extend.colors.testinglibrary,
    background: "bg-testinglibrary",
    key: "testinglibrary",
    repo: "eslint-plugin-testing-library",
    href: "https://github.com/testing-library/eslint-plugin-testing-library",
    org: "testing-library",
    contribution: ["docs", "tests", "code"],
    commitCount: 2,
  },
  {
    Icon: Probot,
    color: tailwindConfig.theme.extend.colors.probot,
    background: "bg-probot",
    key: "probot",
    repo: "probot",
    href: "https://github.com/probot/probot",
    org: "probot",
    contribution: ["docs"],
    commitCount: 1,
  },
];

const getRotation = () => {
  const val = Math.random() * (1 - -1) + -1;
  if (val >= 0) {
    return 0.5;
  }
  return -0.5;
};

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
      className="shadow-l border-dark w-100 relative flex h-36 flex-col items-center justify-center rounded-md border-2 p-2"
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

const About = () => {
  return (
    <Section
      number="02"
      titleSolid="My"
      titleOutline="Work"
      align="center"
      singleLine
      fontSize="text-5xl sm:text-7xl"
      id="Work"
      background="accent"
    >
      <div className="grid grid-cols-2 grid-rows-2 gap-8 px-8 py-3 sm:grid-cols-3 lg:grid-cols-5 lg:grid-rows-1">
        {OpenSource.map(({ key, ...openSourceData }) => (
          <RepoCard key={key} {...openSourceData} />
        ))}
      </div>
    </Section>
  );
};

export default About;
