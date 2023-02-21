import { useEffect, Fragment } from "react";
import { motion } from "framer-motion";
import { Popover, Transition } from "@headlessui/react";
import clsx from "clsx";
import colors from "tailwindcss/colors";
import { useSticky } from "@tek/utils";
import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorClickIcon,
  RefreshIcon,
  ShieldCheckIcon,
  SupportIcon,
  ViewGridIcon,
  MenuIcon,
} from "@heroicons/react/outline";

import MobileMenu from "./Mobile";
import DesktopMenu from "./Desktop";
import { useCompany } from "../../../contexts/Company";
import Logo from "../Logo";

const solutions = [
  {
    name: "Analytics",
    description:
      "Get a better understanding of where your traffic is coming from.",
    href: "#",
    icon: ChartBarIcon,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers in a more meaningful way.",
    href: "#",
    icon: CursorClickIcon,
  },
  {
    name: "Security",
    description: "Your customers' data will be safe and secure.",
    href: "#",
    icon: ShieldCheckIcon,
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools that you're already using.",
    href: "#",
    icon: ViewGridIcon,
  },
  {
    name: "Automations",
    description:
      "Build strategic funnels that will drive your customers to convert",
    href: "#",
    icon: RefreshIcon,
  },
];

function Header({ layout = "main" }: { layout?: "main" | "blog" }) {
  const [isSticky, ref] = useSticky<HTMLDivElement>();
  const { company, setPaused, paused } = useCompany();
  const backgroundColor = layout === "main" ? company.color : colors.white;

  useEffect(() => {
    setPaused(isSticky);
  }, [isSticky, setPaused, paused]);

  return (
    <motion.header
      initial={{
        backgroundColor,
      }}
      animate={{ backgroundColor }}
      transition={{ duration: 0.4 }}
      className={clsx({
        "sticky top-0 left-0 z-10": isSticky,
      })}
      ref={ref}
    >
      <nav
        className="dark:text-dark text-bold mx-auto max-w-7xl px-4 text-white sm:px-6 lg:px-8"
        aria-label="Top"
      >
        <Popover>
          <div className="flex w-full items-center justify-between py-2">
            <Logo />
            <div className="ml-10 space-x-8 text-center lg:block">
              {/* desktop */}
              <DesktopMenu />
              {/* mobile button*/}
              <div className="md:hidden">
                <Popover.Button className="text-light dark:text-dark dark:focus:ring-dark focus:ring-light inline-flex items-center justify-center rounded-md p-2 hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-inset dark:hover:text-gray-500">
                  <span className="sr-only">Open menu</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
          </div>

          {/* mobile menu */}
          <Transition
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
            >
              <MobileMenu company={company} />
            </Popover.Panel>
          </Transition>
        </Popover>
      </nav>
    </motion.header>
  );
}

export default Header;
