import { defineConfig, Options } from "tsup";

export default defineConfig((options: Options) => ({
  entry: ["src/**/*.ts?(x)"],
  format: ["esm"],
  external: [
    "react",
    "next",
    "next-themes",
    "fathom-client",
    "@heroicons/react",
    "@headlessui/react",
  ],
  clean: true,
  inject: ["react-shim.ts"],
  banner: {
    js: `"use client";`
  },
  dts: true,
  ...options,
}));
