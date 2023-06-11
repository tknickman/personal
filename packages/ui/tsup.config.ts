import { defineConfig, Options } from "tsup";

export default defineConfig((options: Options) => ({
  entry: ["src/index.tsx"],
  format: ["cjs", "esm"],
  external: [
    "react",
    "next",
    "next-themes",
    "fathom-client",
    "@heroicons/react",
    "@headlessui/react",
  ],
  inject: ["react-shim.ts"],
  banner: {
    js: `"use client";`
  },
  dts: true,
  ...options,
}));
