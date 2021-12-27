// Icons
import Portfolio from "./components/icons/Portfolio";
import Email from "./components/icons/Email";
import GitHub from "./components/icons/Github";
import Instagram from "./components/icons/Instagram";
import LinkedIn from "./components/icons/LinkedIn";
import StackOverflow from "./components/icons/StackOverflow";
import Teknologist from "./components/icons/Teknologist";

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
      username: "thomasknickman.com",
      url: "http://www.thomasknickman.com/",
      Icon: Portfolio,
    },
    {
      name: "LinkedIn",
      key: "linkedin",
      borderColor: "border-linkedin",
      textColor: "text-linkedin",
      username: "@tknickman",
      url: "https://www.linkedin.com/in/tknickman/",
      Icon: LinkedIn,
    },
    {
      name: "Instagram",
      key: "instagram",
      borderColor: "border-instagram",
      textColor: "text-instagram",
      username: "@tknickman",
      url: "https://www.instagram.com/tknickman/",
      Icon: Instagram,
    },
    {
      name: "Github",
      key: "github",
      borderColor: "border-github",
      textColor: "text-github",
      username: "@tknickman",
      url: "https://github.com/tknickman/",
      Icon: GitHub,
    },
    {
      name: "Freelance",
      key: "teknologist",
      borderColor: "border-teknologist dark:border-white",
      textColor: "text-teknologist dark:text-white",
      username: "Teknologist LLC",
      url: "https://www.teknologist.co/",
      Icon: Teknologist,
    },
    {
      name: "Email",
      key: "email",
      borderColor: "border-email",
      textColor: "text-email",
      username: "tknickman@gmail.com",
      url: "mailto:tknickman+info@gmail.com",
      Icon: Email,
    },
    {
      name: "StackOverflow",
      key: "stackoverflow",
      borderColor: "border-stackoverflow",
      textColor: "text-stackoverflow",
      username: "@tknickman",
      url: "https://stackoverflow.com/users/701449/tknickman",
      Icon: StackOverflow,
    },
  ],
};

export default config;
