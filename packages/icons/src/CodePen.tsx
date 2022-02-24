import Icon, { IconProps } from "./Icon";
import { fill } from "./helpers";

const CodePen = (props: IconProps) => (
  <Icon title="CodePen" {...props}>
    <g>
      <path
        fill={fill(props, "#ffffff")}
        d="M20,5.98L6.347,15.277v9.447L20,34.02l13.652-9.296v-9.447L20,5.98z M20,23.396L15.014,20L20,16.604L24.986,20L20,23.396z
		 M20.865,15.101V8.662l10.387,7.072l-4.729,3.219L20.865,15.101z M19.136,15.101l-5.659,3.854l-4.728-3.22l10.387-7.072V15.101z
		 M11.94,20l-3.863,2.631V17.37L11.94,20z M13.477,21.047l5.659,3.853v6.438L8.749,24.266L13.477,21.047z M20.865,24.899
		l5.658-3.853l4.729,3.219l-10.387,7.072V24.899z M28.061,20l3.863-2.63v5.261L28.061,20z"
      />
    </g>
  </Icon>
);

export default CodePen;
