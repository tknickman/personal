import { ReactNode } from "react";
import clsx from "clsx";

export type IconProps = {
  className?: string;
  monochrome?: boolean;
  children?: ReactNode;
  title?: string;
};

const Icon = ({ className, children, title }: IconProps) => (
  <svg
    className={clsx("fill-current", className)}
    version="1.1"
    x="0px"
    y="0px"
    width="40px"
    height="40px"
    viewBox="0 0 40 40"
  >
    {children}
    <title>{title}</title>
  </svg>
);

export default Icon;
