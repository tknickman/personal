import {
  BookOpenIcon,
  RssIcon,
  ChartPieIcon,
  CodeIcon,
  PhoneOutgoingIcon,
} from "@heroicons/react/outline";

const NAVIGATION = [
  { name: "About", href: "#About", icon: BookOpenIcon },
  { name: "Stats", href: "#Stats", icon: ChartPieIcon },
  { name: "Work", href: "#Work", icon: CodeIcon },
  { name: "Blog", href: "/blog", icon: RssIcon },
  { name: "Contact", href: "#Contact", icon: PhoneOutgoingIcon },
];

export { NAVIGATION };
