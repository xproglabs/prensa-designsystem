import { get } from 'lodash'

import { Param0, Param1 } from './types'

export function responsiveEngine(value: Param0, theme: Param1, parsers) {

  const stringParser = get(parsers, 'string', null)
  const numberParser = get(parsers, 'number', null)
  const queries: any = get(theme, 'queries', {})
  const css = []

  function generateNewCssValue(value) {
    if (typeof value === 'string') return stringParser(value)
    if (typeof value === 'number') return numberParser(value)
  }

  function generateNewCss(value, querie) {
    return `
      @media(min-width: ${querie}) {
        ${typeof value === 'string' ? stringParser(value) : ''}
        ${typeof value === 'number' ? numberParser(value) : ''}
      }
    `
  }

  if (value.length == 2) {
    css.push(
      generateNewCssValue(value[0]),
      generateNewCss(value[1], queries.lg)
    )
  }

  if (value.length == 3) {
    css.push(
      generateNewCssValue(value[0]),
      generateNewCss(value[1], queries.md),
      generateNewCss(value[2], queries.lg)
    )
  }

  return css.join('').replace(/(\r\n|\n|\r)/gm, '').replace(/ /g, '')
}

export function generateNewMediaQuerie(css, querie) {
  if (!css || css === '') return ''
  return `@media(min-width:${querie}){${css}}`
}