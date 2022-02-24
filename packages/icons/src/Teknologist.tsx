import Icon, { IconProps } from "./Icon";
import { fill } from "./helpers";

const Teknologist = (props: IconProps) => (
  <Icon title="Teknologist" {...props}>
    <g>
      <polygon
        fill={fill(props, "#2C4251")}
        points="27.833,26.227 14.033,26.227 14.033,27.979 29.585,27.979 29.585,12.021 27.833,12.021 	"
      />
      <polygon
        fill={fill(props, "#2C4251")}
        points="24.591,12.021 0,12.021 0,13.774 6.505,13.774 6.505,27.979 8.257,27.979 8.257,13.774 
		24.591,13.774 	"
      />
      <rect
        fill={fill(props, "#F96F5D")}
        x="14.033"
        y="19.188"
        width="10.558"
        height="1.752"
      />
      <polygon
        fill={fill(props, "#2C4251")}
        points="40,12.021 37.569,12.021 29.902,19.995 37.431,27.979 39.839,27.979 32.322,20.006 	"
      />
    </g>
  </Icon>
);

export default Teknologist;
