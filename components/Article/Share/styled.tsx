import { margin } from 'prensa/styled-system'

export const getMinWidthValue = ({ $size }: any) => {
  if (!$size) return ''
  return `min-width: ${$size}`
}

export const getItemMarginStyle = ({ theme, itemProps }: any) => {
  return margin({ theme, ...itemProps })
}