import { replace } from 'lodash'

export const removeSpaces = value => {
  if (typeof value === 'string') {
    return replace(value, '&nbsp;', ' ')
  }
  return value
}