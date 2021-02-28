// rollup.config.js
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import analyze from 'rollup-plugin-analyzer';
import babel from 'rollup-plugin-babel';
import external from 'rollup-plugin-peer-deps-external';
import sass from 'rollup-plugin-sass';

const notInBuild = 'example/**, node_modules/**, stories/**, .github/**, .storybook/**, mockup/**, utils/**, icons/assets';
const customResolveOptions = {moduleDirectory: 'node_modules'};

export default [
  {
    input: 'components/index.js',
    output: [
      {
        file: 'index.js',
        format: 'cjs',
        name: 'prensa'
      }
    ],
    plugins: [ 
      babel({exclude: notInBuild}),
      json(),
      resolve({customResolveOptions}),
      sass(),
      analyze(),
      external(),
    ]
  },
  {
    input: 'icons/index.js',
    output: [
      {
        file: 'icons.js',
        format: 'cjs',
        name: 'prensa/icons'
      }
    ],
    plugins: [ 
      babel({exclude: notInBuild}),
      json(),
      resolve({customResolveOptions}),
      sass(),
      analyze(),
      external()
    ]
  },
  {
    input: 'components/Util/index.js',
    output: [
      {
        file: 'utils.js',
        format: 'cjs',
        name: 'prensa/utils'
      }
    ],
    plugins: [ 
      babel({exclude: notInBuild}),
      json(),
      resolve({customResolveOptions}),
      sass(),
      analyze(),
      external()
    ]
  }
];
