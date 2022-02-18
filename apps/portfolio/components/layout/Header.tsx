import { motion } from "framer-motion";
import { Portfolio } from "@tek/icons";
import Link from "next/link";
import { useSticky } from "@tek/utils";
import clsx from "clsx";
import { useEffect } from "react";
import colors from "tailwindcss/colors";
import { DarkModeToggle } from "@tek/ui";

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
        className="dark:text-dark text-bold mx-auto max-w-7xl px-4 text-white sm:px-6 lg:px-8"
        aria-label="Top"
      >
        <div className="flex w-full items-center justify-between py-2">
          <Link href="/" passHref>
            <motion.a
              whileHover={{
                scale: 1.2,
                rotate: -10,
              }}
            >
              <Portfolio className="dark:text-dark text-white" />
            </motion.a>
          </Link>
          <div className="ml-10 space-x-8 text-center lg:block">
            {navigation.map((link) => (
              <Link key={link.name} href={link.href} passHref>
                <a className="decoration-dark text-sm decoration-double decoration-4 underline-offset-4 hover:underline sm:text-base">
                  {link.name}
                </a>
              </Link>
            ))}
            <div className="inline-block">
              <DarkModeToggle size={14} />
            </div>
          </div>
        </div>
      </nav>
    </motion.header>
  );
}

export default Header;
