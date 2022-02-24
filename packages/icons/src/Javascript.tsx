import Icon, { IconProps } from "./Icon";
import { fill } from "./helpers";

const Javascript = (props: IconProps) => (
  <Icon title="Javascript" {...props}>
    <g>
      <path
        fill={fill(props, "#F7DF1E")}
        d="M29.116,0H10.883C4.882,0,0,4.882,0,10.883v18.234C0,35.117,4.882,40,10.883,40h18.233
		C35.118,40,40,35.117,40,29.117V10.883C40,4.882,35.118,0,29.116,0z M37.5,29.117c0,4.621-3.76,8.383-8.384,8.383H10.883
		C6.26,37.5,2.5,33.738,2.5,29.117V10.883C2.5,6.261,6.26,2.5,10.883,2.5h18.233c4.624,0,8.384,3.761,8.384,8.383V29.117z"
      />
      <path
        fill={fill(props, "#F7DF1E")}
        d="M23.518,23.374c0,2.228,1.813,4.039,4.039,4.039h2.79c0.851,0,1.54,0.691,1.54,1.541
		c0,0.849-0.689,1.539-1.54,1.539h-6.829v2.5h6.829c2.229,0,4.041-1.813,4.041-4.039c0-2.229-1.813-4.041-4.041-4.041h-2.79
		c-0.848,0-1.539-0.69-1.539-1.539s0.691-1.539,1.539-1.539h6.831v-2.501h-6.831C25.33,19.334,23.518,21.146,23.518,23.374z"
      />
      <path
        fill={fill(props, "#F7DF1E")}
        d="M18.862,28.954c0,0.849-0.689,1.539-1.539,1.539c-0.848,0-1.539-0.69-1.539-1.539v-2.79h-2.5v2.79
		c0,2.227,1.811,4.039,4.039,4.039s4.04-1.813,4.04-4.039v-9.62h-2.501V28.954z"
      />
    </g>
  </Icon>
);

export default Javascript;
