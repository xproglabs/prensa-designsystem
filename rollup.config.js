import createBundle from './createBundle'

export default [
  createBundle('index.ts', 'dist/index'),
  createBundle('icons/index.ts', 'dist/icons'),
  createBundle('styled-system/index.ts', 'dist/styled-system'),
  createBundle('styles/index.ts', 'dist/styles'),
  createBundle('utils.ts', 'dist/utils')
]
