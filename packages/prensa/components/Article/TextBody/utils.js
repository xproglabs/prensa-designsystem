import replace from 'lodash/replace'

export const removeSpaces = value => {
  if (typeof value === 'string') {
    return replace(value, '&nbsp;', ' ')
  }
  return value
}

export const stringIsBlank = (str) => {
  return (!str || /^\s*$/.test(str))
}