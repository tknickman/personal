import Icon, { IconProps } from "./Icon";
import { fill } from "./helpers";

const React = (props: IconProps) => (
  <Icon {...props}>
    <g>
      <circle fill={fill(props, "#61DBFB")} cx="19.992" cy="19.995" r="2.629" />
      <path
        fill={fill(props, "#61DBFB")}
        d="M40,20c0-3.15-3.383-5.467-8.094-6.874C33.043,8.343,32.727,4.254,30,2.679
		c-0.652-0.375-1.395-0.566-2.211-0.566c-2.266,0-5.012,1.506-7.79,4.111c-2.779-2.605-5.523-4.111-7.791-4.111
		c-0.813,0-1.557,0.191-2.209,0.566C7.273,4.254,6.957,8.343,8.094,13.126C3.384,14.533,0,16.85,0,20
		c0,3.149,3.384,5.467,8.094,6.874c-1.138,4.783-0.822,8.872,1.905,10.445c0.653,0.377,1.396,0.568,2.211,0.568
		c2.267,0,5.012-1.507,7.79-4.11c2.778,2.604,5.524,4.11,7.79,4.11c0.816,0,1.559-0.191,2.211-0.568
		c2.729-1.573,3.043-5.662,1.906-10.445C36.617,25.467,40,23.149,40,20z M27.789,4.612c0.377,0,0.689,0.077,0.961,0.231
		c1.377,0.796,1.652,3.712,0.73,7.661c-1.504-0.324-3.09-0.57-4.711-0.733c-0.98-1.373-1.988-2.631-3.006-3.751
		C24.164,5.784,26.338,4.612,27.789,4.612z M11.958,22.955c0.23,0.43,0.465,0.857,0.708,1.277c0.247,0.427,0.496,0.844,0.75,1.255
		c-0.772-0.116-1.514-0.252-2.221-0.403C11.418,24.394,11.672,23.684,11.958,22.955z M11.195,14.916
		c0.708-0.151,1.449-0.287,2.221-0.403c-0.253,0.411-0.503,0.827-0.75,1.255c-0.243,0.42-0.478,0.848-0.708,1.277
		C11.672,16.317,11.418,15.607,11.195,14.916z M13.253,20c0.473-0.979,0.999-1.978,1.58-2.983c0.583-1.013,1.182-1.966,1.787-2.86
		c1.088-0.078,2.215-0.124,3.38-0.124c1.165,0,2.293,0.046,3.381,0.124c0.604,0.895,1.201,1.848,1.785,2.86
		c0.582,1.006,1.105,2.004,1.58,2.983c-0.475,0.979-0.998,1.977-1.58,2.983c-0.584,1.013-1.184,1.965-1.787,2.859
		c-1.088,0.079-2.215,0.123-3.379,0.123c-1.163,0-2.291-0.044-3.378-0.123c-0.604-0.895-1.203-1.847-1.789-2.859
		C14.252,21.977,13.726,20.979,13.253,20z M26.582,14.513c0.773,0.116,1.514,0.252,2.223,0.403
		c-0.223,0.691-0.477,1.401-0.762,2.129c-0.232-0.431-0.469-0.857-0.711-1.277C27.086,15.34,26.836,14.924,26.582,14.513z
		 M27.332,24.232c0.242-0.42,0.479-0.848,0.711-1.277c0.285,0.729,0.539,1.438,0.762,2.129c-0.709,0.151-1.449,0.287-2.223,0.403
		C26.836,25.076,27.086,24.659,27.332,24.232z M20,9.817c0.49,0.541,0.981,1.119,1.475,1.741c-0.492-0.016-0.983-0.024-1.475-0.024
		c-0.49,0-0.983,0.009-1.477,0.024C19.017,10.937,19.51,10.358,20,9.817z M11.25,4.844c0.271-0.154,0.584-0.231,0.959-0.231
		c1.454,0,3.627,1.172,6.028,3.408c-1.018,1.12-2.027,2.378-3.005,3.751c-1.623,0.163-3.209,0.409-4.711,0.733
		C9.598,8.556,9.873,5.64,11.25,4.844z M8.77,24.463C4.888,23.287,2.5,21.59,2.5,20s2.387-3.287,6.269-4.463
		c0.47,1.469,1.054,2.971,1.729,4.463C9.824,21.49,9.24,22.993,8.77,24.463z M11.25,35.154c-1.376-0.794-1.652-3.71-0.73-7.66
		c1.502,0.325,3.088,0.571,4.711,0.732c0.98,1.377,1.99,2.635,3.009,3.758C15.221,34.799,12.567,35.917,11.25,35.154z M20,30.19
		c-0.489-0.542-0.983-1.126-1.479-1.749c0.494,0.016,0.987,0.025,1.479,0.025c0.492,0,0.987-0.01,1.479-0.025
		C20.982,29.064,20.49,29.648,20,30.19z M28.75,35.154c-1.318,0.763-3.971-0.355-6.99-3.17c1.02-1.123,2.027-2.381,3.01-3.758
		c1.621-0.161,3.209-0.407,4.711-0.732C30.402,31.444,30.127,34.359,28.75,35.154z M31.23,24.463
		c-0.471-1.47-1.055-2.973-1.729-4.463c0.674-1.492,1.258-2.994,1.729-4.463C35.111,16.713,37.5,18.41,37.5,20
		S35.111,23.287,31.23,24.463z"
      />
    </g>
  </Icon>
);

export default React;