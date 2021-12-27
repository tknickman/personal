import clsx from "clsx";

const Teknologist = ({ color }) => (
  <svg
    className={clsx("fill-current", color && color)}
    version="1.1"
    id="Layer_1"
    x="0px"
    y="0px"
    width="40px"
    height="40px"
    viewBox="0 0 40 40"
  >
    <g>
      <polygon points="27.833,26.227 14.033,26.227 14.033,27.979 29.585,27.979 29.585,12.021 27.833,12.021 	" />
      <polygon
        points="24.591,12.021 0,12.021 0,13.774 6.505,13.774 6.505,27.979 8.257,27.979 8.257,13.774 
		24.591,13.774 	"
      />
      <rect x="14.033" y="19.188" width="10.558" height="1.752" />
      <polygon points="40,12.021 37.569,12.021 29.902,19.995 37.431,27.979 39.839,27.979 32.322,20.006 	" />
    </g>
  </svg>
);

export default Teknologist;
