import { CSS } from '@stitches/react'

import { PrensaEngine } from './prensa.default.config'

type PrensaColors = typeof PrensaEngine['config']['theme']['colors']
type PrensaLineHeights = typeof PrensaEngine['config']['theme']['lineHeights']
type PrensaRadiis = typeof PrensaEngine['config']['theme']['radii']
type PrensaSpaces = typeof PrensaEngine['config']['theme']['space']

export type PrensaCSSProp = CSS<typeof PrensaEngine.config>
export type PrensaThemeType = typeof PrensaEngine['theme']
export type PrensaColorTokens = keyof PrensaColors
export type PrensaLineHeightTokens = keyof PrensaLineHeights
export type PrensaRadiiTokens = keyof PrensaRadiis
export type PrensaSpaceTokens = keyof PrensaSpaces
export type PrensaTypeSystem = typeof PrensaEngine['config']['theme']['fontSizes']
export type PrensaTypeSystemTokens = keyof PrensaTypeSystem

export * from './primitives/Accordion/props'
export * from './primitives/Block/props'
export * from './primitives/Button/props'
export * from './primitives/IconButton/props'
export * from './primitives/Typography/props'
export * from './news/types'