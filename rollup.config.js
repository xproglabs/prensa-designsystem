import createBundle from './bundleEngine/bundleGenerator'

export default [
  createBundle('index.ts', 'dist/index', 'index'),
  createBundle('icons/index.ts', 'dist/icons', 'icons'),
  createBundle('styles/index.ts', 'dist/styles', 'styles'),
  createBundle('utils.ts', 'dist/utils', 'utils'),
  createBundle('components/Block/index.tsx', 'dist/Block', 'Block'),
]
