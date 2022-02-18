import { ReactNode } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import colors from "tailwindcss/colors";
import { useCompany } from "../../contexts/Company";

type background = "default" | "accent";

const SectionHeading = ({
  number,
  titleSolid,
  titleOutline,
  align = "left",
  singleLine = false,
  background = "default",
  fontSize = "text-7xl sm:text-9xl",
}: {
  number: string;
  titleSolid: string;
  titleOutline?: string;
  singleLine?: boolean;
  background?: background;
  fontSize?: string;
  align?: "right" | "left" | "center";
}) => {
  const { company } = useCompany();

  const TextComponent = singleLine ? motion.span : motion.div;

  return (
    <div
      className={clsx("mb-8 sm:mb-0 sm:mr-8 sm:shrink-0", {
        "text-center": align === "center",
      })}
    >
      <div className="h-full w-full font-bold">
        <motion.div
          key={number}
          initial={{
            opacity: 0,
            scale: 1.2,
          }}
          animate={{
            textDecorationColor:
              background === "default" ? company.color : colors.gray[800],
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.6,
          }}
          viewport={{ once: true, amount: "some" }}
          className={clsx(
            fontSize,
            "font-outline pb-8 underline decoration-double underline-offset-8"
          )}
        >
          {number}
        </motion.div>
        <TextComponent
          initial={{
            opacity: 0,
          }}
          viewport={{ once: true, amount: "some" }}
          transition={{ delay: 0.4, duration: 0.4 }}
          whileInView={{
            opacity: 1,
          }}
          className={clsx(fontSize)}
        >
          {titleSolid}
        </TextComponent>
        {singleLine && <span className={clsx(fontSize)}> </span>}
        {!!titleOutline && (
          <TextComponent
            initial={{
              opacity: 0,
            }}
            viewport={{ once: true, amount: "some" }}
            transition={{ delay: 0.4, duration: 0.4 }}
            whileInView={{
              opacity: 1,
            }}
            className={clsx(fontSize, {
              "font-outline": !singleLine,
            })}
          >
            {titleOutline}
          </TextComponent>
        )}
      </div>
    </div>
  );
};

const Section = ({
  id,
  number,
  titleSolid,
  titleOutline,
  children,
  fontSize,
  background = "default",
  singleLine = false,
  align = "left",
}: {
  id?: string;
  number: string;
  titleSolid: string;
  titleOutline?: string;
  singleLine?: boolean;
  fontSize?: string;
  background?: "default" | "accent";
  children: ReactNode;
  align?: "right" | "left" | "center";
}) => {
  const { company } = useCompany();
  const backgroundColor = background === "accent" ? company.color : undefined;

  if (align === "center") {
    return (
      <motion.div
        initial={{
          backgroundColor,
        }}
        animate={{ backgroundColor }}
        transition={{ duration: 0.4 }}
        className={clsx("scroll-mt-12  text-center", {
          "dark:text-gray-200": background === "default",
          "dark:text-dark": background === "accent",
        })}
        id={id}
      >
        <div className="justify-center p-8 sm:flex">
          {/* number & title */}
          <SectionHeading
            number={number}
            titleSolid={titleSolid}
            titleOutline={titleOutline}
            align={align}
            singleLine={singleLine}
            background={background}
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
      animate={{ backgroundColor }}
      transition={{ duration: 0.4 }}
      className={clsx("scroll-mt-6 text-center sm:text-left", {
        "dark:text-gray-200": background === "default",
        "dark:text-dark": background === "accent",
      })}
      id={id}
    >
      <div className="p-8 sm:flex">
        {/* number & title */}
        <SectionHeading
          number={number}
          titleSolid={titleSolid}
          titleOutline={titleOutline}
          singleLine={singleLine}
          background={background}
        />
        {/* content */}
        {/* overflow hidden is a weird hack for flexbox */}
        <div className="grow overflow-hidden">{children}</div>
      </div>
    </motion.div>
  );
};

export default Section;
