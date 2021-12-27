import { defineConfig, Options } from "tsup";

export default defineConfig((options: Options) => ({
  entry: ["src/index.tsx"],
  format: ["cjs", "esm"],
  external: ["react", "next", "fathom-client"],
  inject: ["react-shim.ts"],
  dts: true,
  ...options,
}));
