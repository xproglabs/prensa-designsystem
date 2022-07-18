import { styled, theme } from '../../stitches.config'
import { ITypeSystem } from '../../tokens/types'

function generateVariants(): ITypeSystem {
  const variants: ITypeSystem = {}
  const keys = Object.keys(theme.fontSizes)
  keys.forEach((item, key) => {
    variants[keys[key]] = {
      fontSize: `$${item}`,
      fontWeight: `$${item}`,
      letterSpacing: `$${item}`,
      lineHeight: `$${item}`
    }
  })
  return { ...variants }
}

export const Typography = styled('p', {
  variants: { 
    variant: {
      ...generateVariants()
    }
  }
})