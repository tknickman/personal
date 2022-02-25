import { motion } from "framer-motion";
import clsx from "clsx";
import colors from "tailwindcss/colors";

import { useCompany } from "../../../contexts/Company";
import { HeadingProps } from "./types";

const SectionHeading = ({
  number,
  titleSolid,
  titleOutline,
  animate = true,
  align = "left",
  singleLine = false,
  background = "default",
  fontSize = "text-7xl sm:text-9xl",
}: HeadingProps) => {
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
          initial={
            animate && {
              opacity: 0,
              scale: 1.2,
            }
          }
          animate={
            animate && {
              textDecorationColor:
                background === "default" ? company.color : colors.gray[800],
            }
          }
          whileInView={
            animate
              ? {
                  opacity: 1,
                  scale: 1,
                }
              : undefined
          }
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
          initial={
            animate && {
              opacity: 0,
            }
          }
          viewport={{ once: true, amount: "some" }}
          transition={{ delay: 0.4, duration: 0.4 }}
          whileInView={
            animate
              ? {
                  opacity: 1,
                }
              : undefined
          }
          className={clsx(fontSize)}
        >
          {titleSolid}
        </TextComponent>
        {singleLine && <span className={clsx(fontSize)}> </span>}
        {!!titleOutline && (
          <TextComponent
            initial={
              animate && {
                opacity: 0,
              }
            }
            viewport={{ once: true, amount: "some" }}
            transition={{ delay: 0.4, duration: 0.4 }}
            whileInView={
              animate
                ? {
                    opacity: 1,
                  }
                : undefined
            }
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

export default SectionHeading;
