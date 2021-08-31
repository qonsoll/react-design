import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import copy from 'rollup-plugin-copy'
import postcss from 'rollup-plugin-postcss'
import css from 'rollup-plugin-css-porter'
import { terser } from 'rollup-plugin-terser'

import pkg from './package.json'

export default {
  input: 'src/index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs'
    },
    {
      file: pkg.module,
      format: 'es'
    }
  ],
  plugins: [
    // Preferably set as first plugin.
    peerDepsExternal(),
    babel({
      plugins: ['@babel/plugin-syntax-jsx'],
      exclude: 'node_modules/**',
      presets: ['@babel/env', '@babel/preset-react']
    }),
    commonjs(),
    postcss(),
    css({ dest: 'dist/styles/styles.min.css' }),
    copy({
      targets: [
        { src: 'src/styles/antd.css', dest: 'dist/styles' },
        { src: 'src/styles/PhoneInput.css', dest: 'dist/styles' },
        { src: 'src/styles/styles.css', dest: 'dist/styles' },
        { src: 'src/styles/vars.css', dest: 'dist/styles' },
        { src: 'src/styles/antd', dest: 'dist/styles' },
        { src: 'src/styles/vars', dest: 'dist/styles' }
      ]
    }),
    terser()
  ]
}
