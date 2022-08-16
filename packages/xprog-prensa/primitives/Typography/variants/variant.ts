import { PrensaEngine } from '../../../prensa.default.config'
import { PrensaTypeSystem } from '../../../types'

export const CreatePropVariant = (): PrensaTypeSystem => {
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