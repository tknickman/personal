import { motion } from "framer-motion";
import { Popover } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import { Logo } from "../";
import { NAVIGATION } from "./constants";
import clsx from "clsx";
import { Company } from "../../../contexts/Company";
import { DarkModeToggle } from "@tek/ui";
import colors from "tailwindcss/colors";

const OTHER = [
  {
    name: "Blog",
    href: "/blog",
  },
  {
    name: "Categories",
    href: "/blog/tags",
  },
];

const MobileMenu = ({ company }: { company: Company }) => (
  <div className="bg-dark dark:bg-light divide-y-2 divide-gray-700 rounded-b-xl shadow-lg ring-1 ring-black ring-opacity-5 dark:divide-gray-50">
    <div className="px-5 pt-5 pb-6">
      <div className="flex items-center justify-between">
        <div>
          <Logo />
        </div>
        <div className="-mr-2">
          <Popover.Button className="bg-dark dark:bg-light inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-gray-50 focus:outline-none focus:ring-2 focus:ring-inset dark:hover:bg-gray-100 dark:hover:text-gray-500">
            <span className="sr-only">Close menu</span>
            <XIcon className="h-6 w-6" aria-hidden="true" />
          </Popover.Button>
        </div>
      </div>
      <div className="mt-6">
        <nav className="grid gap-y-8">
          {NAVIGATION.map((link) => (
            <Popover.Button
              as={motion.a}
              key={link.name}
              href={link.href}
              initial={{
                color: company.color,
              }}
              animate={{ color: company.color }}
              transition={{ duration: 0.4 }}
              className={clsx(
                "-m-3 flex items-center rounded-md p-3 hover:bg-gray-700 dark:hover:bg-gray-50"
              )}
            >
              <link.icon
                className={clsx("h-6 w-6 flex-shrink-0")}
                aria-hidden="true"
              />
              <span className="dark:text-dark text-light ml-3 text-base font-medium">
                {link.name}
              </span>
            </Popover.Button>
          ))}
        </nav>
      </div>
    </div>
    <div className="space-y-6 px-5 py-6">
      <div className="grid grid-cols-2 gap-y-4 gap-x-8">
        {OTHER.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="dark:text-dark text-light text-base font-medium hover:text-gray-200 dark:hover:text-gray-500"
          >
            {link.name}
          </a>
        ))}
      </div>
    </div>
    <div className="space-y-6 px-5 py-6">
      <DarkModeToggle size={14} />
    </div>
  </div>
);

export default MobileMenu;
