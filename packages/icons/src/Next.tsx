import Icon, { IconProps } from "./Icon";
import { fill } from "./helpers";

const Next = (props: IconProps) => (
  <Icon title="Next" {...props}>
    <g>
      <path
        fill={fill(props, "#ffffff")}
        d="M29.882,10.116C27.242,7.477,23.732,6.024,20,6.024h-0.001c-3.733,0-7.243,1.454-9.883,4.094
		c-2.639,2.64-4.093,6.15-4.092,9.883c0,7.707,6.27,13.976,13.975,13.976h0.002c3.733-0.002,7.243-1.455,9.882-4.094
		c2.641-2.641,4.094-6.15,4.094-9.884C33.977,16.266,32.521,12.756,29.882,10.116z M28.648,28.646
		c-0.521,0.521-1.082,0.986-1.674,1.398l-9.999-14.907h-0.178h-0.874h-0.874l0.001,11.006h1.747l0-8.136l8.673,12.931
		c-1.678,0.842-3.54,1.289-5.472,1.289l-0.001,0.873v-0.873c-6.742,0-12.228-5.484-12.228-12.228c0-3.266,1.271-6.338,3.581-8.647
		c2.309-2.31,5.38-3.582,8.647-3.582c0.001,0,0.001,0,0.001,0c3.266,0,6.337,1.271,8.646,3.581c2.311,2.309,3.582,5.38,3.582,8.646
		C32.229,23.266,30.957,26.336,28.648,28.646z"
      />
      <polygon
        fill={fill(props, "#ffffff")}
        points="23.201,15.137 23.201,21.283 24.949,23.889 24.947,15.137 	"
      />
    </g>
  </Icon>
);

export default Next;
