import json from '@rollup/plugin-json'
import esbuild from 'rollup-plugin-esbuild'

/**
 * Prensa | CreateBundle 
 * Outputs .js bundles
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
    plugins: [json(), esbuild()],
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
  }
}

export default createBundle