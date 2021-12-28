import { ReactNode } from "react";
import clsx from "clsx";

export type IconProps = { color?: string; children: ReactNode };

const Icon = ({ color, children }: IconProps) => (
  <svg
    className={clsx("fill-current", color && color)}
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
