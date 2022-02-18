import Icon, { IconProps } from "./Icon";
import { fill } from "./helpers";

const Portfolio = (props: IconProps) => (
  <Icon {...props}>
    <path
      fill={fill(props, "#5DD39E")}
      d="M28.146,8.172h1.137h1.752V6.419h-0.877H19.73H8.966v1.752H19.73v21.254v4.154h1.753V29.6
	c0.074,0.002,0.15,0.006,0.224,0.006c1.094,0,2.144-0.189,3.118-0.537l2.629,4.512h1.014h1.016l-3.064-5.258
	c2.759-1.621,4.615-4.619,4.615-8.042V9.924h-1.752V20.28c0,4.177-3.398,7.574-7.575,7.574c-0.073,0-0.149,0-0.224-0.004V8.172
	H28.146z"
    />
  </Icon>
);

export default Portfolio;
