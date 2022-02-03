import {
  Portfolio,
  Email,
  GitHub,
  Instagram,
  LinkedIn,
  StackOverflow,
  Teknologist,
  Resume,
  IconProps,
} from "@tek/icons";

export type LinkItem = {
  name: string;
  key: string;
  borderColor: string;
  textColor: string;
  ringColor: string;
  username: string;
  url: string;
  Icon: (props: IconProps) => JSX.Element;
};

type config = {
  THEMES: {
    DARK: string;
    LIGHT: string;
  };
  LINKS: Array<LinkItem>;
};

const config = {
  THEMES: {
    DARK: "dark",
    LIGHT: "light",
  },
  LINKS: [
    {
      name: "Portfolio",
      key: "portfolio",
      borderColor: "border-portfolio",
      textColor: "text-portfolio",
      ringColor: "focus-within:ring-portfolio",
      username: "thomasknickman.com",
      url: "http://www.thomasknickman.com/",
      Icon: Portfolio,
    },
    {
      name: "LinkedIn",
      key: "linkedin",
      borderColor: "border-linkedin",
      textColor: "text-linkedin",
      ringColor: "focus-within:ring-linkedin",
      username: "@tknickman",
      url: "https://www.linkedin.com/in/tknickman/",
      Icon: LinkedIn,
    },
    {
      name: "Instagram",
      key: "instagram",
      borderColor: "border-instagram",
      textColor: "text-instagram",
      ringColor: "focus-within:ring-instagram",
      username: "@tknickman",
      url: "https://www.instagram.com/tknickman/",
      Icon: Instagram,
    },
    {
      name: "Github",
      key: "github",
      borderColor: "border-github",
      textColor: "text-github",
      ringColor: "focus-within:ring-github",
      username: "@tknickman",
      url: "https://github.com/tknickman/",
      Icon: GitHub,
    },
    {
      name: "Freelance",
      key: "teknologist",
      borderColor: "border-teknologist dark:border-white",
      textColor: "text-teknologist dark:text-white",
      ringColor: "focus-within:ring-teknologist",
      username: "Teknologist LLC",
      url: "https://www.teknologist.co/",
      Icon: Teknologist,
    },
    {
      name: "Email",
      key: "email",
      borderColor: "border-email",
      textColor: "text-email",
      ringColor: "focus-within:ring-email",
      username: "tknickman@gmail.com",
      url: "mailto:tknickman+info@gmail.com",
      Icon: Email,
    },
    {
      name: "StackOverflow",
      key: "stackoverflow",
      borderColor: "border-stackoverflow",
      textColor: "text-stackoverflow",
      ringColor: "focus-within:ring-stackoverflow",
      username: "@tknickman",
      url: "https://stackoverflow.com/users/701449/tknickman",
      Icon: StackOverflow,
    },
    {
      name: "Resume",
      key: "resume",
      borderColor: "border-resume",
      textColor: "text-resume",
      ringColor: "focus-within:ring-resume",
      username: "Thomas E. Knickman",
      url: "https://www.tomk.link/resume.pdf",
      Icon: Resume,
    },
  ],
};

export default config;
