var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
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
  getDomains: () => getDomains_default,
  getHostFromHostName: () => getHostFromHostName_default,
  useFathom: () => useFathom_default,
  useHostName: () => useHostName_default
});

// src/hooks/useFathom.tsx
var import_react = __toESM(require("react"));
var import_router = __toESM(require("next/router"));
var import_fathom_client = __toESM(require("fathom-client"));
var useFathom = ({
  includedDomains
}) => {
  const router = (0, import_router.useRouter)();
  (0, import_react.useEffect)(() => {
    (0, import_fathom_client.load)(process.env.NEXT_PUBLIC_FATHOM_TRACKING, {
      includedDomains
    });
    function onRouteChangeComplete() {
      (0, import_fathom_client.trackPageview)();
    }
    router.events.on("routeChangeComplete", onRouteChangeComplete);
    return () => {
      router.events.off("routeChangeComplete", onRouteChangeComplete);
    };
  }, []);
};
var useFathom_default = useFathom;

// src/hooks/useHostName.tsx
var import_react2 = __toESM(require("react"));

// src/getHostFromHostName.ts
var getHostFromHostName = ({
  hostName
}) => {
  if (hostName) {
    const host = hostName.startsWith("www.") ? hostName.slice(4) : hostName;
    return host.split(".")[0];
  }
  return null;
};
var getHostFromHostName_default = getHostFromHostName;

// src/hooks/useHostName.tsx
var useHostName = () => {
  const [hostName, setHostName] = (0, import_react2.useState)(null);
  (0, import_react2.useEffect)(() => {
    var _a;
    const hostname = (_a = window == null ? void 0 : window.location) == null ? void 0 : _a.hostname;
    setHostName(getHostFromHostName_default({ hostName: hostname }));
  }, []);
  return hostName;
};
var useHostName_default = useHostName;

// src/getDomains.ts
var getDomains = ({ hostnames }) => {
  return hostnames.split(",").flatMap((host) => [host, `www.${host}`]);
};
var getDomains_default = getDomains;
module.exports = __toCommonJS(src_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getDomains,
  getHostFromHostName,
  useFathom,
  useHostName
});
