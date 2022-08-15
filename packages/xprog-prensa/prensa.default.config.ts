import { createStitches } from '@stitches/react'
import { align } from '@xprog/prensa-css-engine/css-engine-v2/align'
import { m, mb, ml, mr, mt, mx, my } from '@xprog/prensa-css-engine/css-engine-v2/margin'
import { p, pb, pl, pr, pt, px, py } from '@xprog/prensa-css-engine/css-engine-v2/padding'

import * as DefaultTokens from './providers/PrensaThemeProvider/defaultTokens.json'

export const PrensaEngineDefaultConfig = {
  prefix: 'pds',
  media: {
    xs: '(min-width: 360px)',
    sm: '(min-width: 460px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 1016px)',
    xl: '(min-width: 1280px)',
  },
  theme: {
    colors: DefaultTokens.colors,
    sizes: {
      0: '0px',
      1: '8px',
      2: '16px',
      3: '24px',
      4: '32px',
      5: '40px',
      6: '48px',
      7: '56px',
      8: '64px',
      9: '72px',
      10: '80px',
      11: '88px',
      12: '96px',
      13: '104px',
      14: '112px',
      15: '120px',
      16: '128px',
      17: '136px',
      18: '144px',
      19: '152px',
      20: '160px'
    },
    space: {
      0: '0px',
      1: '4px',
      2: '8px',
      3: '12px',
      4: '16px',
      5: '20px',
      6: '24px',
      7: '28px',
      8: '32px',
      9: '36px',
      10: '40px',
      11: '44px',
      12: '48px',
      13: '52px',
      14: '56px',
      15: '60px',
      16: '64px',
      17: '68px',
      18: '72px',
      19: '76px',
      20: '80px'
    },
    fontSizes: DefaultTokens.fontSizes,
    fontWeights: DefaultTokens.fontWeights,
    lineHeights: DefaultTokens.lineHeights,
    radii: {
      unset: '0px',
      default: '3px',
      alternative: '5px',
      rounded: '99px',
      circle: '50%'
    }
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
}

/**
 * Prensa | Components engine
 */
export const PrensaEngine = createStitches(PrensaEngineDefaultConfig)