import { styled } from '../../stitches.config'
import { CreatePropVariant } from './variants/variant'

/**
 * Prensa | Typography
 */
export const Typography = styled('p', {
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
    variant: { ...CreatePropVariant() }
  }
})