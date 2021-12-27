import { useEffect, useState } from "react";
import { UseDarkMode } from "./types";

function useDarkMode({
  themes,
  onSetLightMode,
  onSetDarkMode,
}: UseDarkMode): [string, () => void] {
  const [theme, setTheme] = useState<string>(themes.DARK);

  const colorTheme = theme === themes.DARK ? themes.LIGHT : themes.DARK;

  const toggleTheme = () => {
    setTheme((theme) => {
      const newTheme = theme === themes.DARK ? themes.LIGHT : themes.DARK;
      // track the theme change
      if (newTheme === themes.LIGHT) {
        onSetLightMode && onSetLightMode();
      } else {
        onSetDarkMode && onSetDarkMode();
      }
      // set the theme
      return theme === themes.DARK ? themes.LIGHT : themes.DARK;
    });
  };

  useEffect(() => {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (e) => {
        setTheme(e.matches ? themes.DARK : themes.LIGHT);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);
  }, [theme, colorTheme]);

  return [colorTheme, toggleTheme];
}

export default useDarkMode;
