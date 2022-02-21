import { motion } from "framer-motion";
import { Portfolio } from "@tek/icons";
import Link from "next/link";
import clsx from "clsx";

type LogoProps = {
  animate?: boolean;
  className?: string;
};

const Logo = ({ className, animate = true }: LogoProps) => (
  <div className={clsx("text-light dark:text-dark flex", className)}>
    <Link href="/" passHref>
      <motion.a
        whileHover={
          animate
            ? {
                scale: 1.2,
                rotate: -10,
              }
            : undefined
        }
      >
        <Portfolio />
      </motion.a>
    </Link>
  </div>
);

export default Logo;
