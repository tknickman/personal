import Icon, { IconProps } from "./Icon";
import { fill } from "./helpers";

const LinkedIn = (props: IconProps) => (
  <Icon title="LinkedIn" {...props}>
    <g>
      <g>
        <rect
          fill={fill(props, "#ffffff")}
          x="12.991"
          y="15.482"
          width="1.752"
          height="11.52"
        />
        <path
          fill={fill(props, "#ffffff")}
          d="M13.867,11.685c-0.347,0-0.684,0.14-0.929,0.386c-0.245,0.245-0.386,0.581-0.386,0.929
			c0,0.343,0.141,0.683,0.386,0.929c0.245,0.245,0.582,0.385,0.929,0.385s0.684-0.14,0.929-0.385
			c0.245-0.246,0.386-0.585,0.386-0.929c0-0.348-0.141-0.688-0.386-0.929C14.551,11.825,14.214,11.685,13.867,11.685z"
        />
        <path
          fill={fill(props, "#ffffff")}
          d="M22.134,15.459c-1.188,0-2.277,0.428-3.124,1.137v-1.114h-1.752v4.853v4v2.666h1.752v-2.666v-4
			c0-1.722,1.401-3.124,3.124-3.124c1.722,0,3.123,1.401,3.123,3.124v6.667h1.752v-6.667C27.009,17.646,24.821,15.459,22.134,15.459
			z"
        />
        <path
          fill={fill(props, "#0E76A8")}
          d="M26.391,5.981H13.61c-4.207,0-7.629,3.423-7.629,7.629v12.78c0,4.207,3.422,7.629,7.629,7.629h12.78
			c4.206,0,7.628-3.422,7.628-7.629V13.61C34.019,9.404,30.597,5.981,26.391,5.981z M32.267,26.391c0,3.24-2.637,5.877-5.876,5.877
			H13.61c-3.241,0-5.876-2.637-5.876-5.877V13.61c0-3.24,2.635-5.876,5.876-5.876h12.78c3.239,0,5.876,2.636,5.876,5.876V26.391z"
        />
      </g>
    </g>
  </Icon>
);

export default LinkedIn;
