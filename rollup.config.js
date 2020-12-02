// rollup.config.js
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
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
    ]
  },
  {
    input: 'components/Templates/index.js',
    external: ['react', 'prop-types', 'sass', 'lodash', 'classnames', 'html2json', 'date-fns', 'styled-components'],
    output: [
      {
        file: 'templates.js',
        format: 'cjs',
        globals: {
          react: 'React'
        },
        name: 'prensa/templates'
      }
    ],
    plugins: [ 
      babel({
        exclude: 'example/**, node_modules/**, stories/**, .github/**, .storybook/**, mockup/**, utils/**, icons/assets',
      }),
      json(),
      resolve(),
      sass(),
    ]
  },
  {
    input: 'components/Typography/index.js',
    external: ['react', 'prop-types', 'sass', 'lodash', 'classnames', 'html2json', 'date-fns', 'styled-components'],
    output: [
      {
        file: 'typography.js',
        format: 'cjs',
        globals: {
          react: 'React'
        },
        name: 'prensa/typography'
      }
    ],
    plugins: [ 
      babel({
        exclude: 'example/**, node_modules/**, stories/**, .github/**, .storybook/**, mockup/**, utils/**, icons/assets',
      }),
      json(),
      resolve(),
      sass(),
    ]
  },
  {
    input: 'icons/index.js',
    external: ['react', 'prop-types', 'sass', 'lodash', 'classnames', 'html2json'],
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
    ]
  }
];
