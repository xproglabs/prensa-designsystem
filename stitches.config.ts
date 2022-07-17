import { createStitches } from '@stitches/react'
import { align } from '@xprog/prensa-css-engine/css-engine-v2/align'
import { m, mb, ml, mr, mt, mx, my } from '@xprog/prensa-css-engine/css-engine-v2/margin'
import { p, pb, pl, pr, pt, px, py } from '@xprog/prensa-css-engine/css-engine-v2/padding'
import tokens from './tokens/default-tokens.json';

/**
 * Stitches.config file
 * This file affects storybook only.
 */
export const {
  config,
  createTheme,
  css,
  getCssText,
  globalCss,
  keyframes,
  styled,
  theme
} = createStitches({
  prefix: 'prensa',
  media: {
    xs: '(min-width: 360px)',
    sm: '(min-width: 460px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 1016px)',
    xl: '(min-width: 1280px)',
  },
  theme: {
    colors: {
	  ......tokens.colors,
      primary: '#D13135',
      secondary: '#298D8C'
    },
    radii: {
      alternative: '5px',
      circle: '50%',
      default: '3px',
      rounded: '99px',
      unset: '0px'
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
      20: '80px',
    },
  },
  utils: {
    align,
    m,
    mb,
    ml,
    mr,
    mt,
    mx,
    my,
    p,
    pb,
    pl,
    pr,
    pt,
    px,
    py
  }
})