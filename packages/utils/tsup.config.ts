import { defineConfig, Options } from "tsup";

export default defineConfig((options: Options) => ({
  entry: ["src/index.tsx"],
  format: ["cjs", "esm"],
  external: ["react", "next", "fathom-client"],
  dts: true,
  ...options,
}));
