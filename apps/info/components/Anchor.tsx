import { AnchorHTMLAttributes } from "react";

const Anchor = (props: AnchorHTMLAttributes<HTMLAnchorElement>) => (
  <a target="_blank" rel="noreferrer" {...props} />
);

export default Anchor;
