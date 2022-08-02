import json from '@rollup/plugin-json'
import esbuild from 'rollup-plugin-esbuild'

/**
 * Prensa | CreateBundle 
 * Outputs .js bundles
 * @param {string} entityPath 
 * @param {string} customPath 
 * @returns 
 */
function createBundle(entityPath, customPath) {
  const inputPath = entityPath.split('.ts')
  const outputPath = 'dist'
  const inputFile = `${entityPath}`
  const cjsOutFile = customPath ? `${outputPath}/${customPath}` : `${outputPath}/${inputPath[0]}.js`
  const esmOutFile = customPath ? `${outputPath}/${customPath}` : `${outputPath}/${inputPath[0]}.esm`

  return {
    input: inputFile,
    plugins: [json(), esbuild({ format: 'esm', exclude: ['node_modules'] })],
    output: [
      {
        file: cjsOutFile,
        format: 'cjs'
      },
      {
        file: esmOutFile,
        format: 'es'
      }
    ]
  }
}

export default createBundle