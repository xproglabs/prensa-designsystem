import createBundle from './bundleEngine/bundleGenerator'

export default [
  createBundle('index.ts', 'dist/index', 'index'),
  createBundle('icons/index.ts', 'dist/icons', 'icons'),
  createBundle('styled-system/index.ts', 'dist/styled-system', 'styled-system'),
  createBundle('styles/index.ts', 'dist/styles', 'styles'),
  createBundle('utils.ts', 'dist/utils', 'utils'),
  createBundle('components/NewBlock/index.tsx', 'dist/NewBlock', 'NewBlock'),
]
