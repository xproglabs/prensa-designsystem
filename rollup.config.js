import createBundle from './bundle/bundleGenerator'
import createDeclaration from './bundle/declarationsGenerator'

/**
 * Prensa JS output file
 * All entities must have a index.ts file.
 * This file generates javascript bundles for NPM distribution using bundleGenerator.
 * This file also generates d.ts files using createDeclaration declarationsGenerator.
 */
export default [
  createBundle('primitives/Block/index.ts'),
  createBundle('primitives/Typography/index.ts'),
  createBundle('providers/PrensaStylesProvider/index.ts'),
  createDeclaration('primitives/Block/index.ts'),
  createDeclaration('primitives/Typography/index.ts'),
  createDeclaration('providers/PrensaStylesProvider/index.ts'),
]
