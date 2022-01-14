import { get, isArray } from 'lodash'

import { renderMedia } from '../responsiveFunction'
import { parseNumberHeight, parseStringHeight } from './parsers'
import { HeightStyledFunctionParam0 } from './types'

export function height(props: HeightStyledFunctionParam0) {

  const value = get(props, '$height', undefined)
  const theme = get(props, 'theme', undefined)
  const factor = get(theme, 'factors.dimensions', undefined)

  if (typeof value === 'string') {
    return parseStringHeight(value)
  }

  if (typeof value === 'number') {
    return parseNumberHeight(value, factor)
  }

  if (isArray(value)) {
    return renderMedia(value, theme, { string: parseStringHeight, number: parseNumberHeight })
  }
}