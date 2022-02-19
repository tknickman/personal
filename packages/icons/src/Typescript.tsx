import Icon, { IconProps } from "./Icon";
import { fill } from "./helpers";

const Typescript = (props: IconProps) => (
  <Icon {...props}>
    <g>
      <path
        fill={fill(props, "#2D79C7")}
        d="M29.115,0H10.883C4.881,0,0,4.882,0,10.883v18.234C0,35.117,4.881,40,10.883,40h18.232
		C35.117,40,40,35.117,40,29.117V10.883C40,4.882,35.117,0,29.115,0z M37.5,29.117c0,4.621-3.762,8.383-8.385,8.383H10.883
		C6.26,37.5,2.5,33.738,2.5,29.117V10.883C2.5,6.261,6.26,2.5,10.883,2.5h18.232c4.623,0,8.385,3.761,8.385,8.383V29.117z"
      />
      <polygon
        fill={fill(props, "#2D79C7")}
        points="12.418,21.835 16.073,21.835 16.073,32.993 18.574,32.993 18.574,21.835 22.229,21.835 
		22.229,19.334 12.418,19.334 	"
      />
      <path
        fill={fill(props, "#2D79C7")}
        d="M23.518,23.374c0,2.228,1.813,4.039,4.039,4.039h2.79c0.849,0,1.539,0.691,1.539,1.541
		c0,0.849-0.69,1.539-1.539,1.539h-6.829v2.5h6.829c2.228,0,4.04-1.813,4.04-4.039c0-2.229-1.813-4.041-4.04-4.041h-2.79
		c-0.848,0-1.539-0.69-1.539-1.539s0.691-1.539,1.539-1.539h6.83v-2.501h-6.83C25.33,19.334,23.518,21.146,23.518,23.374z"
      />
    </g>
  </Icon>
);

export default Typescript;