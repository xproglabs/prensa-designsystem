export const removeSpaces = value => {
  if (typeof value === 'string') {
    return value && value.replaceAll('&nbsp;', ' ')
  }
  return value
}