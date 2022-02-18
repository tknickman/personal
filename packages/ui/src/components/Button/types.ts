import { ReactNode, HTMLAttributes } from "react";

type ButtonProps = {
  children: ReactNode;
  rounded?: boolean;
} & HTMLAttributes<HTMLButtonElement>;

export default ButtonProps;
