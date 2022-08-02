import createBundle from './bundle/bundleGenerator'
import createDeclaration from './bundle/declarationsGenerator'

/**
 * Prensa JS output file
 * All entities must have a index.ts file.
 * This file generates javascript bundles for NPM distribution using bundleGenerator.
 * This file also generates d.ts files using declarationsGenerator.
 */
export default [
  createBundle('index.ts'),
  createDeclaration('index.ts')
]
