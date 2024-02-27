import Icon, { IconProps } from "./Icon";
import { fill } from "./helpers";

const X = (props: IconProps) => (
  <Icon title="X" {...props}>
    <path
      fill={fill(props, "#FFFFFF")}
      d="M23.0218 18.0993L31.8103 8H29.5956L21.9688 16.7649L15.0474 8H7L17.75 21.6136L8.71315 32H10.9278L18.8044 22.9486L25.9526 32H34L23.0218 18.0993ZM10.4364 9.65403H14.2232L30.5636 30.346H26.7768L10.4364 9.65403Z"
    />
  </Icon>
);

export default X;
