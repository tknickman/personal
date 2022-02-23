import { defineConfig, Options } from "tsup";

export default defineConfig((options: Options) => ({
  entry: ["jest/"],
  format: ["cjs"],
  ...options,
}));
