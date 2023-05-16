import { PrensaEngine } from '@xprog/prensa-system'
import { extractVariantKeys } from './variantExtractor'

/**
 * Prensa | Typography
 */
export const Typography = PrensaEngine.styled('p', {
  variants: {
    variant: extractVariantKeys()
  }
})

export type TypographyType = typeof Typography