import { CSS } from '@stitches/react'

import { PrensaEngineType } from './prensa.default.config'

export type PrensaEngineColors = PrensaEngineType['config']['theme']['colors']
export type PrensaEngineLineHeights = PrensaEngineType['config']['theme']['lineHeights']
export type PrensaEngineRadiis = PrensaEngineType['config']['theme']['radii']
export type PrensaEngineSpaces = PrensaEngineType['config']['theme']['space']
export type PrensaEngineFontSizes = PrensaEngineType['config']['theme']['fontSizes']

export type PrensaEngineColorType = keyof PrensaEngineColors
export type PrensaEngineLineHeightType = keyof PrensaEngineLineHeights
export type PrensaEngineRadiiType = keyof PrensaEngineRadiis
export type PrensaEngineSpaceType = keyof PrensaEngineSpaces
export type PrensaEngineCSSProp = CSS<PrensaEngineType['config']>
export type PrensaEngineThemeType = PrensaEngineType['theme']

export * from './primitives/types'