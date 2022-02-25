import { motion } from "framer-motion";
import clsx from "clsx";

import { useCompany } from "../../../contexts/Company";
import { SectionProps } from "./types";

import Heading from "./Heading";

const Section = ({
  id,
  number,
  titleSolid,
  titleOutline,
  children,
  fontSize,
  animate = true,
  background = "default",
  singleLine = false,
  align = "left",
}: SectionProps) => {
  const { company } = useCompany();
  const backgroundColor = background === "accent" ? company.color : undefined;

  if (align === "center") {
    return (
      <motion.div
        initial={{
          backgroundColor,
        }}
        animate={animate && { backgroundColor }}
        transition={{ duration: 0.4 }}
        className={clsx("scroll-mt-12  text-center", {
          "dark:text-gray-200": background === "default",
          "dark:text-dark": background === "accent",
        })}
        id={id}
      >
        <div className="justify-center p-8 sm:flex">
          {/* number & title */}
          <Heading
            number={number}
            titleSolid={titleSolid}
            titleOutline={titleOutline}
            align={align}
            singleLine={singleLine}
            background={background}
            fontSize={fontSize}
          />
        </div>
        {/* content */}
        {/* overflow hidden is a weird hack for flexbox */}
        <div className="mx-2 grow overflow-hidden pt-3 sm:mx-4">{children}</div>
      </motion.div>
    );
  }
  return (
    <motion.div
      initial={{
        backgroundColor,
      }}
      animate={animate && { backgroundColor }}
      transition={{ duration: 0.4 }}
      className={clsx("scroll-mt-6 text-center sm:text-left", {
        "dark:text-gray-200": background === "default",
        "dark:text-dark": background === "accent",
      })}
      id={id}
    >
      <div className="p-8 sm:flex">
        {/* number & title */}
        <Heading
          number={number}
          titleSolid={titleSolid}
          titleOutline={titleOutline}
          singleLine={singleLine}
          background={background}
          fontSize={fontSize}
          animate={animate}
        />
        {/* content */}
        {/* overflow hidden is a weird hack for flexbox */}
        <div className="grow overflow-hidden">{children}</div>
      </div>
    </motion.div>
  );
};

export default Section;
