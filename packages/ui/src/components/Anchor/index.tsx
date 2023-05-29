import AnchorProps from "./types";
import clsx from "clsx";

const Anchor = ({
  children,
  className,
  rounded = false,
  ...other
}: AnchorProps) => (
  <a
    rel={other.target ? "noopener noreferrer" : undefined}
    className={clsx(
      "inline-flex",
      "items-center",
      "px-4",
      "py-2",
      "text-base",
      "font-medium",
      "border",
      "border-transparent",
      "rounded-md",
      "shadow-sm",
      "hover:ring-2",
      "hover:ring-offset-2",
      "focus:outline-none",
      "focus:ring-2",
      "focus:ring-offset-2",
      className,
      {
        "rounded-full": rounded,
      }
    )}
    {...other}
  >
    {children}
  </a>
);

export default Anchor;
