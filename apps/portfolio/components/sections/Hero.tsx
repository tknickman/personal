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
import config from "../../config";
import { ChevronDownIcon } from "@heroicons/react/solid";
import colors from "tailwindcss/colors";
import { useCompany } from "../../contexts/Company";

const { THEMES } = config;

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
        "mt-1 font-bold text-4xl sm:text-6xl md:text-8xl lg:text-9xl h-full",
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
    <div id="Landing" className="snap-start snap-always" ref={ref}>
      <a className="absolute top-8 left-8" href="#">
        <Portfolio color={"dark:text-gray-200"} />
      </a>
      <div className="absolute p-5 top-4 right-4">
        <DarkModeToggle
          themes={THEMES}
          moonColor={colors.gray["800"]}
          sunColor={"white"}
        />
      </div>
      <motion.div
        animate={{
          borderColor: company.color,
        }}
        transition={{ duration: 0.4 }}
        className={clsx(
          "flex items-center justify-center flex-col h-screen px-8 pt-8 border-8"
        )}
      >
        <motion.div className="text-center" style={{ y }}>
          <h2 className="mb-4 text-base font-semibold tracking-wide text-gray-600 uppercase dark:text-gray-200">
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
                    "p-2 dark:text-dark text-light",
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
            "absolute bottom-0 transform -translate-x-1/2 w-14 h-14 left-1/2"
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
              "block origin-bottom p-3 text-light rounded-t-full dark:text-dark"
            )}
          >
            <ChevronDownIcon className="w-8 h-8" aria-hidden="true" />
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
