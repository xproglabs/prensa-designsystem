export const getMinWidthValue = ({ $size }: any) => {
  if (!$size) return ''
  return `min-width: ${$size};`
}

export const getIconHeight = ({ $size }: any) => {
  if (!$size) return ''
  return `height: ${$size};`
}