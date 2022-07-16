import { createStitches } from '@stitches/react'
import tokens from './tokens/default-tokens.json';

type AlignValues = 'column' | 'column-reverse' | 'row' | 'row-reverse'
type AlignXValues = 'left' | 'center' | 'right' | 'evenly' | 'between'
type AlignYValues = 'top' | 'middle' | 'bottom' | 'evenly' | 'between'

function handleAlign(value: [AlignValues, AlignXValues, AlignYValues]) {

  let a = {}
  let ax = {}
  let ay = {}

  const align = value[0]
  const alignx = value[1]
  const aligny = value[2]

  switch (align) {
    case 'row':
      a = {flexDirection: 'row'}
      break
    case 'row-reverse':
      a = {flexDirection: 'row-reverse'}
      break
    case 'column':
      a = {flexDirection: 'column'}
      break
    case 'column-reverse':
      a = {flexDirection: 'column-reverse'}
      break
  }

  if (align === 'column' || align === 'column-reverse') {
    switch (alignx) {
      case 'left':
        ax = { alignItems: 'flex-start' }
        break
      case 'center':
        ax = { alignItems: 'center' }
        break
      case 'right':
        ax = { alignItems: 'flex-end' }
        break
      case 'evenly':
        ax = { justifyContent: 'space-evenly' }
        break
      case 'between':
        ax = { justifyContent: 'space-between' }
        break
      }
  }

  if (align === 'row' || align === 'row-reverse') {
    switch (alignx) {
      case 'left':
        ax = { justifyContent: 'flex-start' }
        break
      case 'center':
        ax = { justifyContent: 'center' }
        break
      case 'right':
        ax = { justifyContent: 'flex-end' }
        break
      case 'evenly':
        ax = { justifyContent: 'space-evenly' }
        break
      case 'between':
        ax = { justifyContent: 'space-between' }
        break
    }
  }

  if (align === 'column' || align === 'column-reverse') {
    switch (aligny) {
      case 'top': 
        ay = { justifyContent: 'flex-start' }
        break
      case 'middle': 
        ay = { justifyContent: 'center' }
        break
      case 'bottom': 
        ay = { justifyContent: 'flex-end' }
        break
      case 'evenly': 
        ay = { justifyContent: 'space-evenly' }
        break
      case 'between': 
        ay = { justifyContent: 'space-between' }
        break
    }
  }

  if (align === 'row' || align === 'row-reverse') {
    switch (aligny) {
      case 'top': 
        ay = { alignItems: 'flex-start' }
        break
      case 'middle': 
        ay = { alignItems: 'center' }
        break
      case 'bottom': 
        ay = { alignItems: 'flex-end' }
        break
      case 'evenly': 
        ay = { justifyContent: 'space-evenly' }
        break
      case 'between': 
        ay = { justifyContent: 'space-between' }
        break
    }
  }

  return { display: 'flex', ...a, ...ax, ...ay }
}

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
  media: {
    xs: '(min-width: 360px)',
    sm: '(min-width: 460px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 1016px)',
    xl: '(min-width: 1280px)',
    druza: '(max-width: 420px)'
  },
  prefix: 'prensa',
  theme: {
    colors: {
      ...tokens.colors
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
    }
  },
  utils: {
    align: (value: [AlignValues, AlignXValues, AlignYValues]) => handleAlign(value),
    marginMaura: (value: string) => ({ marginLeft: value }),
    m: (value: string | number) => ({ margin: value }),
    mt: (value: string | number) => ({ marginTop: value }),
    mr: (value: string | number) => ({ marginRight: value }),
    mb: (value: string | number) => ({ marginBottom: value }),
    ml: (value: string | number) => ({ marginLeft: value }),
    mx: (value: string | number) => ({ marginLeft: value, marginRight: value }),
    my: (value: string | number) => ({ marginTop: value, marginBottom: value }),
    p: (value: string | number) => ({ padding: value }),
    pt: (value: string | number) => ({ paddingTop: value }),
    pr: (value: string | number) => ({ paddingRight: value }),
    pb: (value: string | number) => ({ paddingBottom: value }),
    pl: (value: string | number) => ({ paddingLeft: value }),
    px: (value: string | number) => ({ paddingLeft: value, paddingRight: value }),
    py: (value: string | number) => ({ paddingTop: value, paddingBottom: value }),
  }
})