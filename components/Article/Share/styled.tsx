import { margin } from 'prensa/styled-system'

export const getMinWidthValue = ({ $size }) => {
  if (!$size) return ''
  return `min-width: ${$size}px`
}

export const getItemMarginStyle = ({ theme, itemProps }) => {
  return margin({ theme, ...itemProps })
}