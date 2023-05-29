import { Next, Probot, TestingLibrary, Storybook } from "@tek/icons";

import tailwind from "../../../tailwind.config";
import { OpenSourceType } from "./types";

const PR_FILTER = `is:pr author:tknickman is:closed`;
const EMOJI_KEY = {
  code: "💻",
  tests: "⚠️",
  docs: "📖",
};

const OpenSourceData: Array<OpenSourceType> = [
  {
    Icon: Next,
    color: tailwind.theme.extend.colors.nextjs,
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
    color: tailwind.theme.extend.colors.turborepo,
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
    color: tailwind.theme.extend.colors.storybook,
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
    color: tailwind.theme.extend.colors.testinglibrary,
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
    color: tailwind.theme.extend.colors.probot,
    background: "bg-probot",
    key: "probot",
    repo: "probot",
    href: "https://github.com/probot/probot",
    org: "probot",
    contribution: ["docs"],
    commitCount: 1,
  },
];

export { PR_FILTER, EMOJI_KEY, OpenSourceData };
