declare const Button: () => JSX.Element;

declare type DarkModeConfig = {
    DARK: string;
    LIGHT: string;
};
declare type DarkModeToggleProps = {
    className?: string;
    moonColor: string;
    sunColor: string;
    themes: DarkModeConfig;
    onSetLightMode?: () => void;
    onSetDarkMode?: () => void;
};
declare type UseDarkMode = Omit<DarkModeToggleProps, "moonColor" | "sunColor">;

declare function useDarkMode({ themes, onSetLightMode, onSetDarkMode, }: UseDarkMode): [string, () => void];

declare const DarkModeToggle: ({ className, themes, moonColor, sunColor, onSetLightMode, onSetDarkMode, ...other }: DarkModeToggleProps) => JSX.Element;

export { Button, DarkModeToggle, useDarkMode };
