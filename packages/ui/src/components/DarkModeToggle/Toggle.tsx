import { DarkModeSwitch } from "react-toggle-dark-mode";
import { DarkModeToggleProps } from "./types";
import { useTheme } from "./ThemeContext";

const DarkModeToggle = ({ size = 40, ...other }: DarkModeToggleProps) => {
  const { theme, THEMES, toggleTheme, toggleConfig } = useTheme();

  return (
    <button
      onKeyDown={(e) => e.code === "Enter" && toggleTheme()}
      aria-label={`switch to ${theme === THEMES.DARK ? "light" : "dark"} mode`}
      tabIndex={0}
    >
      <DarkModeSwitch
        checked={theme === THEMES?.LIGHT}
        onChange={toggleTheme}
        {...toggleConfig}
        size={size}
        {...other}
      />
    </button>
  );
};

export default DarkModeToggle;
