var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};

// react-shim.ts
import React from "react";

// src/components/Button.tsx
var Button = () => {
  return /* @__PURE__ */ React.createElement("button", null, "Boop");
};

// src/components/DarkModeToggle/useDarkMode.tsx
import { useEffect, useState } from "react";
function useDarkMode({
  themes,
  onSetLightMode,
  onSetDarkMode
}) {
  const [theme, setTheme] = useState(themes.DARK);
  const colorTheme = theme === themes.DARK ? themes.LIGHT : themes.DARK;
  const toggleTheme = () => {
    setTheme((theme2) => {
      const newTheme = theme2 === themes.DARK ? themes.LIGHT : themes.DARK;
      if (newTheme === themes.LIGHT) {
        onSetLightMode && onSetLightMode();
      } else {
        onSetDarkMode && onSetDarkMode();
      }
      return theme2 === themes.DARK ? themes.LIGHT : themes.DARK;
    });
  };
  useEffect(() => {
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
      setTheme(e.matches ? themes.DARK : themes.LIGHT);
    });
  }, []);
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);
  }, [theme, colorTheme]);
  return [colorTheme, toggleTheme];
}
var useDarkMode_default = useDarkMode;

// src/components/DarkModeToggle/Toggle.tsx
import { DarkModeSwitch } from "react-toggle-dark-mode";
var DarkModeToggle = (_a) => {
  var _b = _a, {
    className,
    themes,
    moonColor,
    sunColor,
    onSetLightMode,
    onSetDarkMode
  } = _b, other = __objRest(_b, [
    "className",
    "themes",
    "moonColor",
    "sunColor",
    "onSetLightMode",
    "onSetDarkMode"
  ]);
  const [colorTheme, toggleTheme] = useDarkMode_default({
    themes,
    onSetLightMode,
    onSetDarkMode
  });
  return /* @__PURE__ */ React.createElement("div", {
    className
  }, /* @__PURE__ */ React.createElement(DarkModeSwitch, __spreadValues({
    checked: colorTheme === themes.DARK,
    onChange: toggleTheme,
    size: 40,
    moonColor,
    sunColor
  }, other)));
};
var Toggle_default = DarkModeToggle;
export {
  Button,
  Toggle_default as DarkModeToggle,
  useDarkMode_default as useDarkMode
};
