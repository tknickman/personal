import Icon, { IconProps } from "./Icon";
import { fill } from "./helpers";

const StackOverflow = (props: IconProps) => (
  <Icon title="StackOverflow" {...props}>
    <g>
      <g>
        <polygon
          fill={fill(props, "#BCBBBB")}
          points="28.751,32.086 10.178,32.086 10.178,24.264 8.426,24.264 8.426,33.838 30.503,33.838 
			30.503,24.264 28.751,24.264 		"
        />
        <rect
          fill={fill(props, "#F48024")}
          x="13.217"
          y="27.25"
          width="12.423"
          height="1.753"
        />

        <rect
          fill={fill(props, "#F48024")}
          x="13.595"
          y="22.616"
          transform="matrix(0.9752 0.2214 -0.2214 0.9752 5.6936 -3.8017)"
          width="12.415"
          height="1.752"
        />

        <rect
          fill={fill(props, "#F48024")}
          x="14.987"
          y="18.191"
          transform="matrix(0.8998 0.4363 -0.4363 0.8998 10.4488 -7.3585)"
          width="12.513"
          height="1.752"
        />

        <rect
          fill={fill(props, "#F48024")}
          x="17.574"
          y="14.114"
          transform="matrix(0.7604 0.6495 -0.6495 0.7604 15.4507 -11.8986)"
          width="12.554"
          height="1.753"
        />

        <rect
          fill={fill(props, "#F48024")}
          x="20.893"
          y="10.885"
          transform="matrix(0.5874 0.8093 -0.8093 0.5874 20.7288 -17.1397)"
          width="12.564"
          height="1.752"
        />
      </g>
    </g>
  </Icon>
);

export default StackOverflow;
