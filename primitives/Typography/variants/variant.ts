//@ts-nocheck
import { PrensaEngine } from '../../../prensa.default.config'
import { TypeSystemTokens } from '../../../types'

export const CreatePropVariant = (): TypeSystemTokens => {
  const variants: TypeSystemTokens = {}
  const keys = Object.keys(PrensaEngine.theme.fontSizes)
  keys.forEach((item, key) => {
    const stylesComposition = {
      fontSize: `$${item}`,
      fontWeight: `$${item}`,
      letterSpacing: `$${item}`,
      lineHeight: `$${item}`
    }
    variants[keys[key]] = stylesComposition
  })
  return variants
}