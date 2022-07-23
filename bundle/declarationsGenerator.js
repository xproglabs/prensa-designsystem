import json from '@rollup/plugin-json'
import ts from 'rollup-plugin-ts'

/**
 * Prensa | CreateDeclarations 
 * Outputs d.ts files
 * @param {*} inputDir 
 * @param {*} outputDir 
 * @returns 
 */
function createBundle(entityPath) {
  const inputPath = entityPath.split('.ts')
  const outputPath = 'dist'
  const inputFile = `${entityPath}`
  const dtsOutFile = `${outputPath}/${inputPath[0]}.d.ts`

  return {
    input: inputFile,
    plugins: [json(), ts()],
    output: [
      {
        file: dtsOutFile,
        format: 'es',
      }
    ]
  }
}

export default createBundle