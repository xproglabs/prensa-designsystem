import get from 'lodash/get'

//ToDo: Allow default props by object, second param
export const dimensions = ({
  theme = {},
  $width = '',
  maxWidth = '',
  minHeight = '',
  minWidth = ''
}) => {  

  const unit = get(theme, 'factors.dimensions', 10)

  let object = []

  if (maxWidth) {
    if (typeof maxWidth === 'string') {
      object.push(`max-width: ${maxWidth};`)
    } else {
      object.push(`max-width: ${maxWidth * unit}px;`)
    }
  }

  if (minWidth) {
    if (typeof minWidth === 'string') {
      object.push(`min-width: ${minWidth};`)
    } else {
      object.push(`min-width: ${minWidth * unit}px;`)
    }
  }


  if (minHeight) {
    if (typeof minHeight === 'string') {
      object.push(`min-height: ${minHeight};`)
    } else {
      object.push(`min-height: ${minHeight * unit}px;`)
    }
  }

  if ($width) {
    if (typeof $width === 'string') {
      object.push(`width: ${$width};`)
    } else {
      object.push(`width: ${$width * unit}px;`)
    }
  }

  return object.join('')
}