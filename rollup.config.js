import createBundle from './bundle/bundleGenerator'

/**
 * Prensa JS output file
 * All entities must have a index.ts file.
 * This file generates javascript bundles for NPM distribution.
 * Typescript declarations d.ts are NOT generated here, output is JS ONLY.
 */
export default [
  createBundle('components/Block/index.ts'),
  createBundle('components/Typography/index.ts'),
  createBundle('styles/teasers/index.ts'),
  createBundle('styles/templates/index.ts'),
  createBundle('styles/theme/index.ts'),
]
