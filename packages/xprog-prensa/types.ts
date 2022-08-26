import { CSS } from '@stitches/react'

import { PrensaEngineType } from './prensa.default.config'

type PrensaEngineColors = PrensaEngineType['config']['theme']['colors']
type PrensaEngineLineHeights = PrensaEngineType['config']['theme']['lineHeights']
type PrensaEngineRadiis = PrensaEngineType['config']['theme']['radii']
type PrensaEngineSpaces = PrensaEngineType['config']['theme']['space']
type PrensaEngineFontSizes = PrensaEngineType['config']['theme']['fontSizes']

export type PrensaEngineCSSProp = CSS<PrensaEngineType['config']>
export type PrensaEngineThemeType = PrensaEngineType['theme']
export type PrensaEngineColorType = keyof PrensaEngineColors
export type PrensaEngineLineHeightType = keyof PrensaEngineLineHeights
export type PrensaEngineRadiiType = keyof PrensaEngineRadiis
export type PrensaEngineSpaceType = keyof PrensaEngineSpaces
export type PrensaEngineTypeSystemType = keyof PrensaEngineFontSizes

export * from './primitives/Accordion/props'
export * from './primitives/Block/props'
export * from './primitives/Button/props'
export * from './primitives/IconButton/props'
export * from './primitives/Typography/props'
export * from './news/types'