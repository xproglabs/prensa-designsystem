import { get } from 'lodash'

/**
 * Prensa | Border Styled Function
 * @param {Object} props Expects props from a React Styled Component
 * @returns String with processed CSS from props input.
 */
export function border(props) {
  // TODO: transform to typescript
  // export function border(props: BorderStyledFunction) {

  const {
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
    radius
  } = props

  const colors = get(theme, 'colors', {})
  const radius_options = get(theme, 'radius')
  const selectedColor = get(colors, borderColor)

  let object = []

  if (bt) {
    object.push(`border-top-color: ${selectedColor};`)
    object.push(`border-top-style: ${borderStyle};`)
    object.push(`border-top-width: ${bt};`)
  }

  if (br) {
    object.push(`border-right-color: ${selectedColor};`)
    object.push(`border-right-style: ${borderStyle};`)
    object.push(`border-right-width: ${br};`)    
  }

  if (bb) {
    object.push(`border-bottom-color: ${selectedColor};`)
    object.push(`border-bottom-style: ${borderStyle};`)
    object.push(`border-bottom-width: ${bb};`)    
  }

  if (bl) {
    object.push(`border-left-color: ${selectedColor};`)
    object.push(`border-left-style: ${borderStyle};`)
    object.push(`border-left-width: ${bl};`)    
  }

  if (b) {
    object.push(`border-color: ${selectedColor};`)
    object.push(`border-style: ${borderStyle};`)
    object.push(`border-width: ${b};`)    
  }

  if (radius) {
    object.push(`border-radius: ${radius_options[radius]}`)
  }

  return object.join('')
}