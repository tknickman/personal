var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
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
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
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
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// src/index.tsx
var src_exports = {};
__export(src_exports, {
  Button: () => Button,
  DarkModeToggle: () => Toggle_default,
  useDarkMode: () => useDarkMode_default
});

// react-shim.ts
var import_react = __toESM(require("react"));

// src/components/Button.tsx
var Button = () => {
  return /* @__PURE__ */ import_react.default.createElement("button", null, "Boop");
};

// src/components/DarkModeToggle/useDarkMode.tsx
var import_react2 = __toESM(require("react"));
function useDarkMode({
  themes,
  onSetLightMode,
  onSetDarkMode
}) {
  const [theme, setTheme] = (0, import_react2.useState)(themes.DARK);
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
  (0, import_react2.useEffect)(() => {
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
      setTheme(e.matches ? themes.DARK : themes.LIGHT);
    });
  }, []);
  (0, import_react2.useEffect)(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);
  }, [theme, colorTheme]);
  return [colorTheme, toggleTheme];
}
var useDarkMode_default = useDarkMode;

// src/components/DarkModeToggle/Toggle.tsx
var import_react_toggle_dark_mode = __toESM(require("react-toggle-dark-mode"));
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
  return /* @__PURE__ */ import_react.default.createElement("div", {
    className
  }, /* @__PURE__ */ import_react.default.createElement(import_react_toggle_dark_mode.DarkModeSwitch, __spreadValues({
    checked: colorTheme === themes.DARK,
    onChange: toggleTheme,
    size: 40,
    moonColor,
    sunColor
  }, other)));
};
var Toggle_default = DarkModeToggle;
module.exports = __toCommonJS(src_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Button,
  DarkModeToggle,
  useDarkMode
});
