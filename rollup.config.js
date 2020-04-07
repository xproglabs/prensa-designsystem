// rollup.config.js
import babel from 'rollup-plugin-babel';
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';

export default {
  input: 'src/index.js',
  external: ['react'],
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
    json(),
    resolve(),
    babel({
      exclude: 'node_modules/**'
    })
  ]
};