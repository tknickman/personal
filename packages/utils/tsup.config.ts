import { defineConfig, Options } from "tsup";

export default defineConfig((options: Options) => [
  // client components
  {
    entry: ["src/index.client.tsx"],
    format: ["esm"],
    external: ["react", "next", "fathom-client"],
    inject: ["react-shim.ts"],
    banner: {
      js: `"use client";`
    },
    dts: true,
    minify: false,
    clean: true,
    ...options,
  },
  // server components
  {
    entry: ["src/index.server.tsx"],
    format: ["esm"],
    external: ["react", "next", "fathom-client"],    
    dts: true,
    minify: false,
    clean: true,
    ...options,
  },
]);
