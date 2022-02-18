export type DarkModeConfig = {
  DARK: string;
  LIGHT: string;
};

export type ThemeContextValue = {
  theme: string;
  toggleTheme: () => void;
  THEMES: DarkModeConfig;
  toggleConfig?: DarkModeToggleProps;
};

export type DarkModeToggleProps = {
  moonColor?: string;
  sunColor?: string;
  className?: string;
  size?: number;
};
