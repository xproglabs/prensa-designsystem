import { PrensaEngineThemeType, PrensaEngineCSSProp } from '../../types'
import { TypographyType } from './styles'

type TypographyVariantKeys = PrensaEngineThemeType['fontSizes']

export type TypographyProps = TypographyType
export type TypographyVariantKeysType = { [K in keyof TypographyVariantKeys]: PrensaEngineCSSProp }
export type TypographyVariantType = keyof TypographyVariantKeys