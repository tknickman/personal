import { defineConfig, Options } from "tsup";

export default defineConfig((options: Options) => ({
  entry: ["src/**/*.tsx"],
  treeshake: true,
  splitting: true,
  format: ["esm"],
  external: ["react", "next", "fathom-client"],
  inject: ["react-shim.ts"],
  dts: true,
  clean: true,
  ...options,
}));
