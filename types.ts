import { CSS } from '@stitches/react'

import { PrensaEngine } from './prensa.default.config'

export type CSSProp = CSS<typeof PrensaEngine.config>
export type ColorTokens = typeof PrensaEngine['config']['theme']['colors']
export type LineHeightTokens = typeof PrensaEngine['config']['theme']['lineHeights']
export type RadiiTokens = typeof PrensaEngine['config']['theme']['radii']
export type SpaceTokens = typeof PrensaEngine['config']['theme']['space']
export type TypeSystemTokens = typeof PrensaEngine['config']['theme']['fontSizes']
