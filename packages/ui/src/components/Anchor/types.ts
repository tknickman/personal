import { ReactNode, HTMLProps } from "react";

type AnchorProps = {
  children: ReactNode;
  rounded?: boolean;
} & HTMLProps<HTMLAnchorElement>;

export default AnchorProps;
