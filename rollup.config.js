// rollup.config.js
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import sass from 'rollup-plugin-sass';

export default {
  input: 'src/index.js',
  external: ['react', 'prop-types', 'sass', 'classnames'],
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
      exclude: 'example, node_modules/**, stories, .github, .storybook'
    }),
    json(),
    resolve(),
    sass()
  ]
};