import { createBundle } from './bundle/bundleGenerator'

/**
 * Prensa JS output file
 * All entities must have a index.ts file.
 * This file generates javascript bundles for NPM distribution using bundleGenerator.
 */
export default [
  createBundle('index.ts')
]
