import { defineConfig, Options } from "tsup";

export default defineConfig((options: Options) => [
  // client components
  {
    entry: ["src/client/**/*.ts?(x)"],
    // treeshake: true,
    codeSplitting: true,
    format: ["esm"],
    external: ["react", "next", "fathom-client"],
    inject: ["react-shim.ts"],
    banner: {
      js: `"use client";`,
    },
    dts: true,
    minify: false,
    clean: true,
    ...options,
  },
  // server components
  {
    entry: ["src/server/**/*.ts?(x)"],
    codeSplitting: true,
    treeshake: true,
    format: ["esm"],
    dts: true,
    minify: false,
    clean: true,
    ...options,
  },
]);
