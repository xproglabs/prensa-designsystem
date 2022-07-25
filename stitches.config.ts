import { createStitches } from '@stitches/react'
import { align } from '@xprog/prensa-css-engine/css-engine-v2/align'
import { m, mb, ml, mr, mt, mx, my } from '@xprog/prensa-css-engine/css-engine-v2/margin'
import { p, pb, pl, pr, pt, px, py } from '@xprog/prensa-css-engine/css-engine-v2/padding'

import tokens from './tokens/theme.json'

/**
 * Prensa stitches.config file
 * This file provides default configurations for using Prensa-DS.
 */
const stitches = createStitches({
  prefix: 'pds',
  media: {
    xs: '(min-width: 360px)',
    sm: '(min-width: 460px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 1016px)',
    xl: '(min-width: 1280px)',
  },
  theme: {
    ...tokens
  },
  utils: {
    align,
    m,
    mt,
    mr,
    mb,
    ml,
    mx,
    my,
    p,
    pt,
    pr,
    pb,
    pl,
    px,
    py
  }
})

export const PrensaEngine = stitches
