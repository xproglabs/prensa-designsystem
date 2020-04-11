// rollup.config.js
import babel from 'rollup-plugin-babel';
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import sass from 'rollup-plugin-sass';

export default {
  input: 'src/index.js',
  external: ['react', 'prop-types', 'sass'],
  output: [
    {
      file: 'index.js',
      format: 'cjs',
      globals: {
        react: 'React'
      },
      name: 'xprog-ds'
    }
  ],
  plugins: [ 
    babel({
      exclude: 'node_modules/**'
    }),
    json(),
    resolve(),
    sass()
  ]
};