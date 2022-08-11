import { PrensaEngine } from '../../../prensa.default.config'
import { PrensaTypeSystemTokens } from '../../../types'

export const CreatePropVariant = (): PrensaTypeSystemTokens => {
  let variants: PrensaTypeSystemTokens | any = {}
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