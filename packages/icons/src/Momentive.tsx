import Icon, { IconProps } from "./Icon";
import { fill } from "./helpers";

const Momentive = (props: IconProps) => (
  <Icon title="Momentive" {...props}>
    <g>
      <path
        fill={fill(props, "#008500")}
        d="M22.475,18.391L4.988,29.765h20.863v-0.874c0-3.48-1.002-6.858-2.9-9.77L22.475,18.391z M10.878,28.018
   l11.067-7.198c1.27,2.199,2,4.658,2.137,7.198H10.878z"
      />
      <g>
        <path
          fill={fill(props, "#FFE300")}
          d="M8.807,25.197V12.742c4.375,0.234,8.293,2.215,11.068,5.256l1.479-0.962
     c-3.286-3.715-8.083-6.063-13.421-6.063H7.06v15.36L8.807,25.197z"
        />
      </g>
      <g>
        <path
          fill={fill(props, "#00B5F7")}
          d="M23.939,17.438l0.476,0.73c0.16,0.245,0.312,0.494,0.46,0.745l8.391-5.457v14.562h-5.688
     C27.59,28.309,27.6,28.6,27.6,28.891v0.874h7.412V10.235L23.939,17.438z"
        />
      </g>
    </g>
  </Icon>
);

export default Momentive;
