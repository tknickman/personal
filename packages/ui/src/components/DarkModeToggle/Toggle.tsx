import { DarkModeSwitch } from "react-toggle-dark-mode";
import useDarkMode from "./useDarkMode";
import { DarkModeToggleProps } from "./types";

const DarkModeToggle = ({
  className,
  themes,
  moonColor,
  sunColor,
  onSetLightMode,
  onSetDarkMode,
  ...other
}: DarkModeToggleProps) => {
  const [colorTheme, toggleTheme] = useDarkMode({
    themes,
    onSetLightMode,
    onSetDarkMode,
  });

  return (
    <div className={className}>
      <DarkModeSwitch
        checked={colorTheme === themes.DARK}
        onChange={toggleTheme}
        size={40}
        moonColor={moonColor}
        sunColor={sunColor}
        {...other}
      />
    </div>
  );
};

export default DarkModeToggle;
