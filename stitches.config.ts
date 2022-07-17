import { createStitches } from '@stitches/react'

/**
 * Stitches.config file
 * This file affects storybook only.
 */
export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
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
      primary: '#D13135',
      secondary: '#298D8C'
    },
    radii: {
      unset: '0px',
      alternative: '5px',
      default: '3px',
      rounded: '99px',
      circle: '50%'
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
  }
})