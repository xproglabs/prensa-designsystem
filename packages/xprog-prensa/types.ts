import { CSS } from '@stitches/react'

import { PrensaEngine } from './prensa.default.config'

export type PrensaCSSProp = CSS<typeof PrensaEngine.config>
export type PrensaThemeType = typeof PrensaEngine['theme']
export type PrensaColorTokens = typeof PrensaEngine['config']['theme']['colors']
export type PrensaLineHeightTokens = typeof PrensaEngine['config']['theme']['lineHeights']
export type PrensaRadiiTokens = typeof PrensaEngine['config']['theme']['radii']
export type PrensaSpaceTokens = typeof PrensaEngine['config']['theme']['space']
export type PrensaTypeSystemTokens = typeof PrensaEngine['config']['theme']['fontSizes']
