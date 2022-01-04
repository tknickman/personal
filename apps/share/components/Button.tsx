import clsx from "clsx";
import { HTMLProps } from "react";

const ButtonLink = ({
  className,
  children,
  ...props
}: HTMLProps<HTMLAnchorElement>) => (
  <a
    target="_blank"
    type="button"
    className={clsx(
      "inline-flex",
      "appearance-none",
      "items-center",
      "px-4",
      "py-2",
      "text-sm",
      "font-medium",
      "border",
      "rounded-md",
      "shadow-sm",
      "focus:outline-none",
      "focus:ring-2",
      "focus:ring-offset-2",
      "focus:ring-primary-700",
      className
    )}
    {...props}
  >
    {children}
  </a>
);

export default ButtonLink;
