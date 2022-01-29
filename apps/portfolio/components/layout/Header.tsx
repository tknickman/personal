import { motion } from "framer-motion";
import { Portfolio } from "@tek/icons";
import Link from "next/link";
import { useSticky } from "@tek/utils";
import clsx from "clsx";
import { useEffect } from "react";
import colors from "tailwindcss/colors";
import { DarkModeToggle } from "@tek/ui";
import config from "../../config";
const { THEMES } = config;

import { useCompany } from "../../contexts/Company";

const navigation = [
  { name: "About", href: "#About" },
  { name: "Stats", href: "#Stats" },
  { name: "Work", href: "#Work" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "#Contact" },
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
        "sticky top-0 z-10": isSticky,
      })}
      ref={ref}
    >
      <nav
        className="px-4 mx-auto text-white dark:text-dark max-w-7xl sm:px-6 lg:px-8 text-bold"
        aria-label="Top"
      >
        <div className="flex items-center justify-between w-full py-2">
          <Link href="/" passHref>
            <motion.a
              whileHover={{
                scale: 1.2,
                rotate: -10,
              }}
            >
              <Portfolio color={"text-white dark:text-dark"} />
            </motion.a>
          </Link>
          <div className="ml-10 space-x-8 text-center lg:block">
            {navigation.map((link) => (
              <Link key={link.name} href={link.href} passHref>
                <a className="text-sm sm:text-base hover:underline underline-offset-4 decoration-dark decoration-4 decoration-double">
                  {link.name}
                </a>
              </Link>
            ))}
            <div className="inline-block">
              <DarkModeToggle
                themes={THEMES}
                moonColor={colors.gray["800"]}
                sunColor={"white"}
                size={14}
              />
            </div>
          </div>
        </div>
      </nav>
    </motion.header>
  );
}

export default Header;
