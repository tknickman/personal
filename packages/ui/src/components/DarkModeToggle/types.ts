export type DarkModeConfig = {
  DARK: string;
  LIGHT: string;
};

export type DarkModeToggleProps = {
  className?: string;
  moonColor: string;
  sunColor: string;
  themes: DarkModeConfig;
  onSetLightMode?: () => void;
  onSetDarkMode?: () => void;
};

export type UseDarkMode = Omit<DarkModeToggleProps, "moonColor" | "sunColor">;
