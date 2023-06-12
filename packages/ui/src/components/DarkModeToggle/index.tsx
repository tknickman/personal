import { Menu, Transition } from "@headlessui/react";
import { SunIcon, MoonIcon, DesktopComputerIcon } from "@heroicons/react/solid";
import { Fragment, useState, useEffect } from "react";
import { useTheme } from "next-themes";
import clsx from "clsx";

const THEMES = [
  { name: "Light", icon: SunIcon },
  { name: "Dark", icon: MoonIcon },
  { name: "System", icon: DesktopComputerIcon },
];

interface DarkModeToggleProps {
  triggerClassName?: string;
  menuClassName?: string;
  itemClassName?: string;
  activeClassName?: string;
}

export default function DarkModeToggle({
  triggerClassName,
  menuClassName,
  itemClassName,
  activeClassName = "",
}: DarkModeToggleProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // prevents ssr flash for mismatched dark mode
  if (!mounted) {
    return null;
  }

  const active = THEMES.find((item) => item.name.toLowerCase() === theme);
  if (active === undefined) return null;

  const ActiveIcon = active.icon;

  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button
        className={clsx(
          "inline-flex font-light items-center gap-x-1 text-sm px-2 py-1 leading-6",
          triggerClassName
        )}
      >
        <ActiveIcon className="h-5 w-5" aria-hidden="true" />
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          className={clsx(
            "absolute right-0 mt-2 origin-top-right rounded-md overflow-hidden shrink ring-1 ring-black ring-opacity-5 focus:outline-none",
            menuClassName
          )}
        >
          {THEMES.map((item) => (
            <Menu.Item key={item.name}>
              {({ active }) => (
                <button
                  disabled={item.name.toLowerCase() === theme}
                  className={clsx(
                    "flex w-full p-2 items-center text-sm tracking-tight",
                    itemClassName,
                    {
                      [activeClassName]: active,
                    }
                  )}
                  onClick={() => setTheme(item.name.toLowerCase())}
                >
                  <item.icon className="h-4 w-4 mr-2 flex" aria-hidden="true" />
                  {item.name}
                </button>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
