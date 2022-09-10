import { VariantProps } from '@stitches/react'

import { PrensaEngineThemeType, PrensaEngineCSSProp } from '../../types'
import { TypographyType } from './styles'

type TypographyVariantsType = VariantProps<TypographyType>
type TypographyVariantKeys = PrensaEngineThemeType['fontSizes']

export type TypographyProps = TypographyType['propTypes']
export type TypographyVariantKeysType = { [K in keyof TypographyVariantKeys]: PrensaEngineCSSProp }
export type TypographyVariantType = TypographyVariantsType['variant']