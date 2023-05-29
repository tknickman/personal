import ButtonProps from "./types";
import clsx from "clsx";

const Button = ({
  children,
  className,
  rounded = false,
  ...other
}: ButtonProps) => (
  <button
    className={clsx(
      "inline-flex",
      "items-center",
      "px-4",
      "text-base",
      "font-medium",
      "border",
      "border-transparent",
      "shadow-sm",
      "hover:ring-accent",
      "hover:ring-2",
      "hover:ring-offset-2",
      "focus:outline-none",
      "focus:ring-2",
      "focus:ring-offset-2",
      className,
      {
        "rounded-full py-4": rounded,
        "rounded-md py-2": !rounded,
      }
    )}
    {...other}
  >
    {children}
  </button>
);

export default Button;
