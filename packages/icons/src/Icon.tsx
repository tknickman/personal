import { ReactNode } from "react";
import clsx from "clsx";

export type IconProps = {
  className?: string;
  color?: string;
  children?: ReactNode;
};

const Icon = ({ className, color, children }: IconProps) => (
  <svg
    className={clsx("fill-current", color && color, className)}
    version="1.1"
    x="0px"
    y="0px"
    width="40px"
    height="40px"
    viewBox="0 0 40 40"
  >
    {children}
  </svg>
);

export default Icon;
