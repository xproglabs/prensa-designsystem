import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import typescript from 'rollup-plugin-typescript2'

import { createNetworkViz, createTreeMapViz } from './bundleVisualizer'

function createBundle(inputDir, outputDir, name) {

  const cjsOutDir = `${outputDir}.js`
  const esmOutDir = `${outputDir}.esm`

  return {
    input: inputDir,
    output: [
      {
        file: cjsOutDir,
        format: 'cjs',
        sourcemap: true
      },
      {
        file: esmOutDir,
        format: 'es',
        sourcemap: true
      }
    ],
    plugins: [
      babel({ babelHelpers: 'bundled' }),
      commonjs(),
      peerDepsExternal(),
      resolve(),
      typescript({ useTsconfigDeclarationDir: true }),
      createNetworkViz(name),
      createTreeMapViz(name)
    ]
  }
}

export default createBundle