import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import resolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import pkg from "./package.json" assert { type: "json" };

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: pkg.module,
        format: "cjs",
        sourcemap: false,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs({ extensions: [".js"] }),
      typescript({ tsconfig: "./tsconfig.json" }),
      postcss({
        extensions: [".css"],
      }),
      terser(),
      json(),
    ],
  },
  {
    input: "dist/cjs/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "cjs" }],
    plugins: [dts()],

    external: [/\.css$/], // telling rollup anything that is .css aren't part of type exports
  },
];
