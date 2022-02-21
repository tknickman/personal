import { IconProps } from "@tek/icons";

export type OpenSourceType = {
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

export type linkData = {
  href: string;
  target: string;
  rel: string;
};
