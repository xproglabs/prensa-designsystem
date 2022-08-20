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
      20: '80px',
      21: '84px',
      22: '88px',
      23: '92px',
      24: '96px',
      25: '100px',
      26: '104px',
      27: '108px',
      28: '112px',
      29: '116px',
      30: '120px',
      31: '124px',
      32: '128px',
      33: '132px',
      34: '136px',
      35: '140px',
      36: '144px',
      37: '148px',
      38: '152px',
      39: '156px',
      40: '160px'
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
    },
    sideMenu: {
      sizeMaxcontent: 'max-content',
      sizeSm: '320px',
      sizeMd: '340px',
      sizeLg: '360px',
      sizeFullwidth: '100%',
      innerSpaceSm: '$space$4',
      innerSpaceMd: '$space$6',
      innerSpaceLg: '$space$8',
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