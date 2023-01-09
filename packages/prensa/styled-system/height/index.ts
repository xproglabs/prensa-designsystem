import get from 'lodash/get'
import isArray from 'lodash/isArray'

import { responsiveEngine } from '../responsiveEngine'
import { parseNumberHeight, parseStringHeight } from './parsers'
import { HeightStyledFunctionParam0 } from './types'

/**
 * Prensa Styled System | height
 * @param props Expect an Object containing props from component that is invoking this function
 * $height: string | number | Array<string | number>;
 * @returns a string with CSS syntax
 */
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
    return responsiveEngine(value, theme, {
      string: parseStringHeight,
      number: parseNumberHeight
    })
  }
}