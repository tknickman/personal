import { DarkModeSwitch } from "react-toggle-dark-mode";
import useDarkMode from "./useDarkMode";
import { DarkModeToggleProps } from "./types";

const DarkModeToggle = ({
  themes,
  moonColor,
  sunColor,
  onSetLightMode,
  onSetDarkMode,
  size = 40,
  ...other
}: DarkModeToggleProps) => {
  const [colorTheme, toggleTheme] = useDarkMode({
    themes,
    onSetLightMode,
    onSetDarkMode,
  });

  return (
    <DarkModeSwitch
      checked={colorTheme === themes.DARK}
      onChange={toggleTheme}
      size={size}
      moonColor={moonColor}
      sunColor={sunColor}
      {...other}
    />
  );
};

export default DarkModeToggle;
