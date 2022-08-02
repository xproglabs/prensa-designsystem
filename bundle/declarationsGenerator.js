import json from '@rollup/plugin-json'
import ts from 'rollup-plugin-ts'

/**
 * Prensa | CreateDeclarations 
 * Outputs d.ts files
 * @param {string} entityPath 
 * @param {string} customPath
 * @returns 
 */
function createDeclarations(entityPath, customPath) {
  const inputPath = entityPath.split('.ts')
  const outputPath = 'dist'
  const inputFile = `${entityPath}`
  const dtsOutFile = customPath ? `${outputPath}/${customPath}` : `${outputPath}/${inputPath[0]}.d.ts`

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

export default createDeclarations