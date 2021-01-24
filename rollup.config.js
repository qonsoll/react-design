import peerDepsExternal from "rollup-plugin-peer-deps-external";
import babel from '@rollup/plugin-babel'
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
import multi from '@rollup/plugin-multi-entry';
import { terser } from "rollup-plugin-terser";

const packageJson = require("./package.json");

export default {
  // input: [
  //   "src/index.ts",
  //   "src/components/Base/Box/Box.template.tsx",
  //   "src/components/Grid/Container/Container.template.tsx",
  //   "src/components/Grid/Row/Row.template.tsx",
  //   "src/components/Grid/Col/Col.template.tsx"
  // ],
  // output: [
  //   {
  //     dir: "build",
  //     format: "cjs",
  //     sourcemap: true,
  //     exports: 'named'
  //   },
  //   {
  //     dir: "build",
  //     format: "esm",
  //     sourcemap: true,
  //     exports: 'named'
  //   }
  // ],
  input: "src/index.ts",
  output: [
    {
      // dir: "build",
      file: packageJson.main,
      format: "cjs",
      sourcemap: true
    },
    {
      // dir: "build",
      file: packageJson.module,
      format: "esm",
      sourcemap: true
    }
  ],
  // preserveModules: true,
  plugins: [
    babel({
      exclude: "node_modules/**"
    }),
    // multi(),
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true, allowNonTsExtensions: true }),
    postcss(),
    terser(),
  ],
};