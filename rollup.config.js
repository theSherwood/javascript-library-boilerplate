import nodeResolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import bundleSize from 'rollup-plugin-size';
import gzip from 'rollup-plugin-gzip';
import sourcemaps from 'rollup-plugin-sourcemaps';

export default [
  {
    input: 'src/index.js',
    plugins: [
      sourcemaps(),
      nodeResolve(),
      terser({
        compress: {
          passes: 2,
        },
        mangle: {
          properties: {
            regex: /^_/,
          },
        },
      }),
      gzip(),
    ],
    external: [],
    output: [
      {
        file: 'dist/min.js',
        name: 'test_library',
        format: 'iife',
        globals: {},
        compact: true,
        plugins: [
          bundleSize({
            columnWidth: 25,
          }),
        ],
      },
    ],
  },
];
