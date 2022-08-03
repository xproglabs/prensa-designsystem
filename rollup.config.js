import createBundle from './bundle/bundleGenerator'

/**
 * Prensa JS output file
 * All entities must have a index.ts file.
 * This file generates javascript bundles for NPM distribution using bundleGenerator.
 * This file also generates d.ts files using declarationsGenerator.
 */
export default [
  createBundle('index.ts'),
]
