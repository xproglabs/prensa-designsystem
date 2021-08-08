import { get } from 'lodash'

export const border = ({
  theme = {},
  bt = '',
  br = '',
  bb = '',
  bl = '',
  // bx = '',
  // by = '',
  b = '',
  borderColor = '',
  borderStyle = 'solid',
}) => {

  const colors = get(theme, 'colors', {})
  const selectedColor = colors[borderColor]

  let object = []

  if (bt) {
    object.push(`border-top-color: ${selectedColor};`)
    object.push(`border-top-style: ${borderStyle};`)
    if (typeof bt === 'string') {
      object.push(`border-top-width: ${bt};`)
    } else {
      object.push(`border-top-width: ${bt}px;`)
    }
  }

  if (br) {
    object.push(`border-right-color: ${selectedColor};`)
    object.push(`border-right-style: ${borderStyle};`)
    if (typeof br === 'string') {
      object.push(`border-right-width: ${br};`)
    } else {
      object.push(`border-right-width: ${br}px;`)
    }
  }

  if (bb) {
    object.push(`border-bottom-color: ${selectedColor};`)
    object.push(`border-bottom-style: ${borderStyle};`)
    if (typeof bb === 'string') {
      object.push(`border-bottom-width: ${bb};`)
    } else {
      object.push(`border-bottom-width: ${bb}px;`)
    }
  }

  if (bl) {
    object.push(`border-left-color: ${selectedColor};`)
    object.push(`border-left-style: ${borderStyle};`)
    if (typeof bl === 'string') {
      object.push(`border-left-width: ${bl};`)
    } else {
      object.push(`border-left-width: ${bl}px;`)
    }
  }

  if (b) {
    object.push(`border-color: ${selectedColor};`)
    object.push(`border-style: ${borderStyle};`)
    if (typeof b === 'string') {
      object.push(`border-width: ${b};`)
    } else {
      object.push(`border-width: ${b}px;`)
    }
  }

  return object.join('')
}