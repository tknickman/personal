import { HomeIcon } from "@heroicons/react/outline";
import { trackGoal } from "fathom-client";
import fathomGoals from "../lib/fathomGoals";

const navigation = [
  {
    name: "Contact",
    goal: () => trackGoal(fathomGoals.footerHomeClick, 0),
    href: "http://www.tomk.info",
    icon: <HomeIcon className="w-5 h-5 mr-3 -ml-1" aria-hidden="true" />,
  },
];

export default function Example() {
  return (
    <footer className="fixed bottom-0 w-full">
      <div className="py-4 mx-5 md:flex md:items-center md:justify-between">
        <div className="flex justify-center space-x-6 md:order-2">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={item.goal}
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">{item.name}</span>
              {item.icon}
            </a>
          ))}
        </div>
        <div className="mt-8 md:mt-0 md:order-1">
          <p className="text-sm text-center text-gray-400">
            &copy; {new Date().getFullYear()} Teknologist LLC. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
