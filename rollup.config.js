import createBundle from './bundleEngine/bundleGenerator'

export default [
  // createBundle('index.ts', 'dist/index', 'index'),
  // createBundle('icons/index.ts', 'dist/icons', 'icons'),
  // createBundle('utils.ts', 'dist/utils', 'utils'),
  createBundle('components/Block/index.tsx', 'dist/components/Block/index', 'components/Block/**/*'),
  createBundle('components/Typography/index.tsx', 'dist/components/Typography/index', 'components/Typography/**/*'),
  createBundle('styles/index.ts', 'dist/styles/index', 'styles/theme/**/*')
]
