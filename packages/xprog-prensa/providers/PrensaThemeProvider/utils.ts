import { AlignValues, AlignXValues, AlignYValues } from './types'
/**
 * Prensa | padding
 * @param value string | number
 * @returns CSS-in-JS property | Object with CSS-in-JS properties
 */
export const p = (value: string | number) => ({ padding: value })
/**
 * Prensa | paddingTop
 * @param value string | number
 * @returns CSS-in-JS property | Object with CSS-in-JS properties
 */
export const pt = (value: string | number) => ({ paddingTop: value })
/**
 * Prensa | paddingRight
 * @param value string | number
 * @returns CSS-in-JS property | Object with CSS-in-JS properties
 */
export const pr = (value: string | number) => ({ paddingRight: value })
/**
 * Prensa | paddingBottom
 * @param value string | number
 * @returns CSS-in-JS property | Object with CSS-in-JS properties
 */
export const pb = (value: string | number) => ({ paddingBottom: value })
/**
 * Prensa | paddingLeft
 * @param value string | number
 * @returns CSS-in-JS property | Object with CSS-in-JS properties
 */
export const pl = (value: string | number) => ({ paddingLeft: value })
/**
 * Prensa | paddingX - paddingLeft + paddingRight
 * @param value string | number
 * @returns CSS-in-JS property | Object with CSS-in-JS properties
 */
export const px = (value: string | number) => ({ paddingLeft: value, paddingRight: value })
/**
 * Prensa | paddingY - paddingTop + paddingBottom
 * @param value string | number
 * @returns CSS-in-JS property | Object with CSS-in-JS properties
 */
export const py = (value: string | number) => ({ paddingTop: value, paddingBottom: value })
/**
 * Prensa | margin
 * @param value string | number
 * @returns CSS-in-JS property | Object with CSS-in-JS properties
 */
export const m = (value: string | number) => ({ margin: value })
/**
 * Prensa | marginTop
 * @param value string | number
 * @returns CSS-in-JS property | Object with CSS-in-JS properties
 */
export const mt = (value: string | number) => ({ marginTop: value })
/**
 * Prensa | marginRight
 * @param value string | number
 * @returns CSS-in-JS property | Object with CSS-in-JS properties
 */
export const mr = (value: string | number) => ({ marginRight: value })
/**
 * Prensa | marginBottom
 * @param value string | number
 * @returns CSS-in-JS property | Object with CSS-in-JS properties
 */
export const mb = (value: string | number) => ({ marginBottom: value })
/**
 * Prensa | marginLeft
 * @param value string | number
 * @returns CSS-in-JS property | Object with CSS-in-JS properties
 */
export const ml = (value: string | number) => ({ marginLeft: value })
/**
 * Prensa | marginX - marginLeft + marginRight
 * @param value string | number
 * @returns CSS-in-JS property | Object with CSS-in-JS properties
 */
export const mx = (value: string | number) => ({ marginLeft: value, marginRight: value })
/**
 * Prensa | marginY - marginTop + marginBottom
 * @param value string | number
 * @returns CSS-in-JS property | Object with CSS-in-JS properties
 */
export const my = (value: string | number) => ({ marginTop: value, marginBottom: value })
/**
* Prensa | align
* @param value [AlignValues, AlignXValues, AlignYValues]
* @returns CSS-in-JS property | Object with CSS-in-JS properties
*/
export const align = (value: [AlignValues, AlignXValues, AlignYValues]) => {
  let a = {}
  let ax = {}
  let ay = {}

  const align = value[0]
  const alignx = value[1]
  const aligny = value[2]

  switch (align) {
    case 'row':
      a = { flexDirection: 'row' }
      break
    case 'row-reverse':
      a = { flexDirection: 'row-reverse' }
      break
    case 'column':
      a = { flexDirection: 'column' }
      break
    case 'column-reverse':
      a = { flexDirection: 'column-reverse' }
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

export const Utils = {
  align,
  p,
  pt,
  pr,
  pb,
  pl,
  px,
  py,
  m,
  mt,
  mr,
  mb,
  ml,
  mx,
  my
}
