import Icon, { IconProps } from "./Icon";
import { fill } from "./helpers";

const Vercel = (props: IconProps) => (
  <Icon {...props}>
    <path
      fill={fill(props, "#FFFFFF")}
      d="M20.001,2.68L0,37.32h40L20.001,2.68z M20.001,7.46L35.86,34.93H4.14L20.001,7.46z"
    />
  </Icon>
);

export default Vercel;
