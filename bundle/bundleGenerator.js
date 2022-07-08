import typescript from '@rollup/plugin-typescript'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'

/**
 * Prensa | CreateBundle 
 * Outputs Javascript bundles ready to publish in NPM.
 * @param {*} inputDir 
 * @param {*} outputDir 
 * @returns 
 */
function createBundle(entityPath) {
  const inputPath = entityPath.split('.ts')
  const outputPath = 'dist'
  const inputFile = `${entityPath}`
  const cjsOutFile = `${outputPath}/${inputPath[0]}.js`
  const esmOutFile = `${outputPath}/${inputPath[0]}.esm`

  return {
    input: inputFile,
    output: [
      {
        file: cjsOutFile,
        format: 'cjs',
        sourcemap: true
      },
      {
        file: esmOutFile,
        format: 'es',
        sourcemap: true
      }
    ],
    plugins: [
      peerDepsExternal(),
      typescript()
    ]
  }
}

export default createBundle