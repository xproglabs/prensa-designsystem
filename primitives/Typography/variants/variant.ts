import { PrensaEngine } from '../../../stitches.config'
import { ITypeSystem } from '../../../tokens/types'

//Todo: Implementar tipagem proveniente de fonte automática (tokens brain)
export const CreatePropVariant = (): ITypeSystem | {} => {
  const variants: ITypeSystem | {} = {}
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