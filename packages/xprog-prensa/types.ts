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

export * from './primitives/types'
export * from './news/types'