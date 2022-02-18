import { IconProps } from ".";

const fill = (props: IconProps, color: string) => {
  const { monochrome = true } = props;
  return monochrome ? undefined : color;
};

export { fill };
