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
        file: 'components/icons.js',
        format: 'cjs',
        sourcemap: true
      },
      {
        file: 'components/icons.esm.js',
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
    input: 'src/styles/layouts/index.ts',
    output: [
      {
        file: 'components/layouts.js',
        format: 'cjs',
        sourcemap: true
      },
      {
        file: 'components/layouts.esm.js',
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
        file: 'components/styled-system.js',
        format: 'cjs',
        sourcemap: true
      },
      {
        file: 'components/styled-system.esm.js',
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
        file: 'components/utils.js',
        format: 'cjs',
        sourcemap: true
      },
      {
        file: 'components/utils.esm.js',
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
