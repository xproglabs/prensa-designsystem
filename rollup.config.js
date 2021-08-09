// rollup.config.js
import commonjs from '@rollup/plugin-commonjs'
import json_resolver from '@rollup/plugin-json'
import resolve from '@rollup/plugin-node-resolve'
import analyze from 'rollup-plugin-analyzer'
import babel from 'rollup-plugin-babel'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import typescript from 'rollup-plugin-typescript2'

import pkg from './package.json'

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        sourcemap: true
      },
      {
        file: pkg.module,
        format: 'es',
        sourcemap: true
      }
    ],
    plugins: [
      analyze(),
      babel(),
      commonjs(),
      json_resolver(),
      peerDepsExternal(),
      resolve(),
      typescript({ useTsconfigDeclarationDir: true })
    ]
  },
  {
    input: 'src/icons.ts',
    output: [
      {
        file: 'icons.js',
        format: 'cjs',
        sourcemap: true
      },
      {
        file: 'icons.esm.js',
        format: 'es',
        sourcemap: true
      }
    ],
    plugins: [
      analyze(),
      babel(),
      commonjs(),
      json_resolver(),
      peerDepsExternal(),
      resolve(),
      typescript({ useTsconfigDeclarationDir: true })
    ]
  },
  {
    input: 'src/styled-system.ts',
    output: [
      {
        file: 'styled-system.js',
        format: 'cjs',
        sourcemap: true
      },
      {
        file: 'styled-system.esm.js',
        format: 'es',
        sourcemap: true
      }
    ],
    plugins: [
      analyze(),
      babel(),
      commonjs(),
      json_resolver(),
      peerDepsExternal(),
      resolve(),
      typescript({ useTsconfigDeclarationDir: true })
    ]
  },
  {
    input: 'src/templates.ts',
    output: [
      {
        file: 'templates.js',
        format: 'cjs',
        sourcemap: true
      },
      {
        file: 'templates.esm.js',
        format: 'es',
        sourcemap: true
      }
    ],
    plugins: [
      analyze(),
      babel(),
      commonjs(),
      json_resolver(),
      peerDepsExternal(),
      resolve(),
      typescript({ useTsconfigDeclarationDir: true })
    ]
  },
  {
    input: 'src/utils.ts',
    output: [
      {
        file: 'utils.js',
        format: 'cjs',
        sourcemap: true
      },
      {
        file: 'utils.esm.js',
        format: 'es',
        sourcemap: true
      }
    ],
    plugins: [
      analyze(),
      babel(),
      commonjs(),
      json_resolver(),
      peerDepsExternal(),
      resolve(),
      typescript({ useTsconfigDeclarationDir: true })
    ]
  },
]
