// rollup.config.js
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import analyze from 'rollup-plugin-analyzer';
import babel from 'rollup-plugin-babel';
import sass from 'rollup-plugin-sass';

export default [
  {
    input: 'components/index.js',
    external: ['react', 'prop-types', 'sass', 'lodash', 'classnames', 'html2json', 'date-fns', 'styled-components'],
    output: [
      {
        file: 'index.js',
        format: 'cjs',
        globals: {
          react: 'React'
        },
        name: 'prensa'
      }
    ],
    plugins: [ 
      babel({
        exclude: 'example/**, node_modules/**, stories/**, .github/**, .storybook/**, mockup/**, utils/**, icons/assets',
      }),
      json(),
      resolve(),
      sass(),
      analyze(),
    ]
  },
  {
    input: 'icons/index.js',
    external: ['react', 'prop-types', 'sass', 'lodash', 'classnames', 'html2json', 'date-fns', 'styled-components'],
    output: [
      {
        file: 'icons.js',
        format: 'cjs',
        globals: {
          react: 'React'
        },
        name: 'prensa/icons'
      }
    ],
    plugins: [ 
      babel({
        exclude: 'example/**, node_modules/**, stories/**, .github/**, .storybook/**, mockup/**, utils/**, icons/assets',
      }),
      json(),
      resolve(),
      sass(),
      analyze()
    ]
  },
  {
    input: 'components/Util/index.js',
    external: ['react', 'prop-types', 'sass', 'lodash', 'classnames', 'html2json', 'date-fns', 'styled-components'],
    output: [
      {
        file: 'utils.js',
        format: 'cjs',
        globals: {
          react: 'React'
        },
        name: 'prensa/utils'
      }
    ],
    plugins: [ 
      babel({
        exclude: 'example/**, node_modules/**, stories/**, .github/**, .storybook/**, mockup/**, utils/**, icons/assets',
      }),
      json(),
      resolve(),
      sass(),
      analyze()
    ]
  }
];
