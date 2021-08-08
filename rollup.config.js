// rollup.config.js
import commonjs from '@rollup/plugin-commonjs'
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
      peerDepsExternal(),
      resolve(),
      typescript({ useTsconfigDeclarationDir: true })
    ]
  },
  {
    input: 'src/icons.ts',
    output: [
      {
        file: 'dist/icons.js',
        format: 'cjs',
        sourcemap: true
      },
      {
        file: 'dist/icons.esm.js',
        format: 'es',
        sourcemap: true
      }
    ],
    plugins: [
      analyze(),
      babel(),
      commonjs(),
      peerDepsExternal(),
      resolve(),
      typescript({ useTsconfigDeclarationDir: true })
    ]
  },
  {
    input: 'src/styled-system.ts',
    output: [
      {
        file: 'dist/styled-system.js',
        format: 'cjs',
        sourcemap: true
      },
      {
        file: 'dist/styled-system.esm.js',
        format: 'es',
        sourcemap: true
      }
    ],
    plugins: [
      analyze(),
      babel(),
      commonjs(),
      peerDepsExternal(),
      resolve(),
      typescript({ useTsconfigDeclarationDir: true })
    ]
  },
  {
    input: 'src/utils.ts',
    output: [
      {
        file: 'dist/utils.js',
        format: 'cjs',
        sourcemap: true
      },
      {
        file: 'dist/utils.esm.js',
        format: 'es',
        sourcemap: true
      }
    ],
    plugins: [
      analyze(),
      babel(),
      commonjs(),
      peerDepsExternal(),
      resolve(),
      typescript({ useTsconfigDeclarationDir: true })
    ]
  },
]
