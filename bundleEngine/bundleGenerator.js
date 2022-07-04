import typescript from '@rollup/plugin-typescript'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'

function createBundle(inputDir, outputDir, declarationInput) {

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
      peerDepsExternal(),
      typescript({ tsconfig: './tsconfig.json', include: [ declarationInput ] }),
    ]
  }
}

export default createBundle