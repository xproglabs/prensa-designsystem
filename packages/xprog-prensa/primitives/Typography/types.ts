import { VariantProps } from '@stitches/react'
import { PrensaEngineCSS, PrensaEngineTypeof } from '@xprog/prensa-system'

import { TypographyType } from './styles'

type TypographyVariantsType = VariantProps<TypographyType>
type TypographyVariantKeys = PrensaEngineTypeof['config']['theme']['fontSizes']

export type TypographyProps = TypographyType['propTypes']
export type TypographyVariantKeysType = { [K in keyof TypographyVariantKeys]: PrensaEngineCSS }
export type TypographyVariantType = TypographyVariantsType['variant']