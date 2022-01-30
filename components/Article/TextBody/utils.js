export const removeSpaces = value => {
  if (typeof value === 'string') {
    return value.replaceAll('&nbsp;', ' ')
  }
  return value
}