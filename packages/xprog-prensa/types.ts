import type * as Stitches from '@stitches/react';
import { PrensaEngineType } from './prensa.default.config'

export type PrensaEngineColors = PrensaEngineType['theme']['colors']
export type PrensaEngineLineHeights = PrensaEngineType['theme']['lineHeights']
export type PrensaEngineRadiis = PrensaEngineType['theme']['radii']
export type PrensaEngineSpaces = PrensaEngineType['theme']['space']
export type PrensaEngineFontSizes = PrensaEngineType['theme']['fontSizes']

export type PrensaEngineColorType = keyof PrensaEngineColors
export type PrensaEngineLineHeightType = keyof PrensaEngineLineHeights
export type PrensaEngineRadiiType = keyof PrensaEngineRadiis
export type PrensaEngineSpaceType = keyof PrensaEngineSpaces
export type PrensaEngineThemeType = PrensaEngineType['theme']
export type PrensaEngineCSSProp = Stitches.CSS<PrensaEngineType>

export * from './primitives/types'
export * from './news/types'