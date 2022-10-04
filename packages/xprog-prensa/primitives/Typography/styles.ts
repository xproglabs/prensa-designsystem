import { PrensaEngine } from '../../stitches.config'
import { extractVariantKeys } from './variantExtractor'

/**
 * Prensa | Typography
 */
export const Typography = PrensaEngine.styled('p', {
  variants: {
    as: {
      h1: {},
      h2: {},
      h3: {},
      h4: {},
      h5: {},
      h6: {},
      p: {},
      span: {}
    },
    variant: extractVariantKeys()
  }
})

export type TypographyType = typeof Typography