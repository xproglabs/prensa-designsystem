import { PrensaEngine } from '@xprog/prensa-system'
import { TypographyVariantKeys } from './types'

export const extractVariantKeys = (): TypographyVariantKeys => {
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