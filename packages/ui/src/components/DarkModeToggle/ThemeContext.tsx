import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
} from "react";
import { ThemeContextValue, DarkModeToggleProps } from "./types";

const context = createContext<ThemeContextValue>({} as ThemeContextValue);
const { Provider, Consumer } = context;

const THEMES = {
  DARK: "dark",
  LIGHT: "light",
};

const ThemeContext = ({
  onSetDarkMode,
  onSetLightMode,
  toggleConfig,
  children,
}: {
  onSetDarkMode?: () => void;
  onSetLightMode?: () => void;
  toggleConfig?: DarkModeToggleProps;
  children: ReactNode;
}) => {
  const [theme, setTheme] = useState<string>(THEMES.DARK);

  const toggleTheme = () => {
    setTheme((theme) => {
      const newTheme = theme === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK;
      // track the theme change
      if (newTheme === THEMES.LIGHT) {
        onSetLightMode && onSetLightMode();
      } else {
        onSetDarkMode && onSetDarkMode();
      }
      // set the theme
      return theme === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK;
    });
  };

  // listen for changes in system theme
  useEffect(() => {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (e) => {
        setTheme(e.matches ? THEMES.DARK : THEMES.LIGHT);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // update the theme class on the root when the theme changes
  useEffect(() => {
    const root = window.document.documentElement;
    // remove old class
    root.classList.remove(theme === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK);
    // add new class
    root.classList.add(theme);
  }, [theme]);

  return (
    <Provider value={{ theme, toggleTheme, THEMES, toggleConfig }}>
      {children}
    </Provider>
  );
};

const useTheme = () => useContext(context);

export { Provider, Consumer, ThemeContext, useTheme, THEMES };
