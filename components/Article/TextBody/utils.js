export const removeSpaces = value => {
  if (!value) return ''
  return value.replaceAll('&nbsp;', ' ')
}