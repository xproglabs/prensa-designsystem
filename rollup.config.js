// rollup.config.js
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import typescript from 'rollup-plugin-typescript2'

export default [
  {
    input: 'index.ts',
    output: [
      {
        file: 'dist/index.js',
        format: 'cjs',
        sourcemap: true
      },
      {
        file: 'dist/index.esm',
        format: 'es',
        sourcemap: true
      }
    ],
    plugins: [
      babel(),
      commonjs(),
      peerDepsExternal(),
      resolve(),
      typescript({ useTsconfigDeclarationDir: true })
    ]
  },
  {
    input: 'icons/index.ts',
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
      babel(),
      commonjs(),
      peerDepsExternal(),
      resolve(),
      typescript({ useTsconfigDeclarationDir: true })
    ]
  },
  {
    input: 'styled-system/index.ts',
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
      babel(),
      commonjs(),
      peerDepsExternal(),
      resolve(),
      typescript({ useTsconfigDeclarationDir: true })
    ]
  },
  {
    input: 'styles/index.ts',
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
      babel(),
      commonjs(),
      peerDepsExternal(),
      resolve(),
      typescript({ useTsconfigDeclarationDir: true })
    ]
  },
  {
    input: 'utils.ts',
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
      babel(),
      commonjs(),
      peerDepsExternal(),
      resolve(),
      typescript({ useTsconfigDeclarationDir: true })
    ]
  },
]
