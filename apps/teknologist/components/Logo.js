import clsx from "clsx";

const Logo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    style={{
      fillRule: "evenodd",
      clipRule: "evenodd",
      strokeLinejoin: "round",
      strokeMiterlimit: 2,
      height: "100%",
      width: "100%",
    }}
    viewBox="0 0 178 74"
  >
    <g id="LOGO">
      <path
        className={clsx("fill-current", "text-primary dark:text-white")}
        d="M103.896 0H0v14.455h24.196v59.317h16.281V14.455h63.419V0Z"
      />
      <path
        className={clsx("fill-current", "text-primary dark:text-white")}
        d="M113.551 0v59.317H59.518v14.455l70.314-.001V0h-16.281Z"
      />
      <path
        className={clsx("fill-current", "text-accent")}
        d="M59.518 29.659h44.378v14.455H59.518z"
      />
      <path
        className={clsx("fill-current", "text-primary dark:text-white")}
        d="M148.684 36.752 177.634.001h-19.566l-29.054 36.886 29.055 36.886h19.565l-29.055-36.886.105-.135Z"
      />
    </g>
  </svg>
);

export default Logo;
