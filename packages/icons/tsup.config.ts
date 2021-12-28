import { defineConfig, Options } from "tsup";

export default defineConfig((options: Options) => ({
  entry: ["src/index.tsx"],
  format: ["cjs", "esm"],
  external: ["react"],
  inject: ["react-shim.ts"],
  dts: true,
  ...options,
}));
