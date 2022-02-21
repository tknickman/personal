import {
  motion,
  AnimatePresence,
  useViewportScroll,
  useTransform,
} from "framer-motion";
import { useState } from "react";
import { useElementPosition } from "@tek/utils";
import { Portfolio } from "@tek/icons";
import { DarkModeToggle } from "@tek/ui";
import clsx from "clsx";
import { ReactNode } from "react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import colors from "tailwindcss/colors";
import { useCompany } from "../../contexts/Company";

const Item = ({
  children,
  id,
  className,
}: {
  children: ReactNode;
  id: string;
  className?: string;
}) => {
  return (
    <motion.div
      key={id}
      initial={{ marginTop: "-200px", opacity: 0.1, rotate: -20 }}
      animate={{ marginTop: 0, opacity: 1.0, rotate: 0 }}
      exit={{ marginTop: "200px", opacity: 0.1, rotate: -20 }}
      transition={{ duration: 0.4 }}
      className={clsx(
        "mt-1 h-full text-4xl font-bold sm:text-6xl md:text-8xl lg:text-9xl",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

const Hero = () => {
  const [pulseCTA, setPulseCTA] = useState<boolean>(true);
  const { scrollY } = useViewportScroll();
  const [dimensions, ref] = useElementPosition<HTMLDivElement>();
  const { company, adjective } = useCompany();

  const y = useTransform(
    scrollY,
    [dimensions.top, dimensions.bottom],
    [0, 50],
    {
      clamp: false,
    }
  );

  return (
    <div id="Landing" className="relative snap-start snap-always" ref={ref}>
      <a className="absolute top-8 left-8" href="#">
        <Portfolio className="dark:text-gray-200" />
      </a>
      <div className="absolute top-4 right-4 p-5">
        <DarkModeToggle />
      </div>
      <motion.div
        animate={{
          borderColor: company.color,
        }}
        transition={{ duration: 0.4 }}
        className={clsx(
          "flex h-screen flex-col items-center justify-center border-8 px-8 pt-8"
        )}
      >
        <motion.div className="text-center" style={{ y }}>
          <h2 className="mb-4 text-base font-semibold uppercase tracking-wide text-gray-600 dark:text-gray-200">
            I {company.verb}
            <AnimatePresence exitBeforeEnter>
              <motion.div
                key={adjective}
                className={clsx(
                  "inline-block px-1 text-center underline decoration-2 underline-offset-2"
                )}
                initial={{
                  opacity: 0,
                  textDecorationColor: colors.gray["800"],
                }}
                animate={{ opacity: 1.0, textDecorationColor: company.color }}
                exit={{ opacity: 0, textDecorationColor: colors.gray["800"] }}
                transition={{ duration: 0.4 }}
              >
                {adjective}
              </motion.div>{" "}
            </AnimatePresence>
            things for
          </h2>
          <div className="h-12 overflow-hidden sm:h-32 lg:h-48">
            <AnimatePresence exitBeforeEnter>
              <Item id={company.name} key={company.name}>
                <mark
                  className={clsx(
                    "dark:text-dark text-light p-2",
                    company.background
                  )}
                >
                  {company.name}
                </mark>
              </Item>
            </AnimatePresence>
          </div>
        </motion.div>
        <div
          className={clsx(
            "absolute bottom-0 left-1/2 h-14 w-14 -translate-x-1/2 transform"
          )}
        >
          <motion.a
            href="#About"
            onMouseLeave={() => setPulseCTA(false)}
            onMouseEnter={() => setPulseCTA(true)}
            whileHover={{
              height: 55,
              scale: 1.4,
              transition: {
                ease: "easeInOut",
                duration: 0.4,
              },
            }}
            transition={{
              backgroundColor: { duration: 0.4 },
              scale: {
                repeat: pulseCTA ? Infinity : 0,
                repeatType: "mirror",
                repeatDelay: 1.5,
                duration: 1.5,
                ease: "easeInOut",
              },
            }}
            animate={{
              backgroundColor: company.color,
              scale: [1, 1.2, 1],
              height: 50,
            }}
            className={clsx(
              "text-light dark:text-dark block origin-bottom rounded-t-full p-3"
            )}
          >
            <ChevronDownIcon className="h-8 w-8" aria-hidden="true" />
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
