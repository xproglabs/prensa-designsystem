import { PrensaEngine } from '../../prensa.default.config'
import { TypographyVariantKeysType } from './types'

export const extractVariantKeys = (): TypographyVariantKeysType => {
  let variants: any = {}
  const keys = Object.keys(PrensaEngine.theme.fontSizes)
  keys.forEach((item, key) => {
    const stylesComposition = {
      fontFamily: '$primary',
      fontSize: `$${item}`,
      fontWeight: `$${item}`,
      lineHeight: `$${item}`
    }
    variants[keys[key]] = stylesComposition
  })
  return variants
}