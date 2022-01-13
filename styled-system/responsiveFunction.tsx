import { get, map } from 'lodash'
import { ThemeTypes } from 'prensa'

type Param0 = Array<string | number>
type Param1 = ThemeTypes

export function renderMedia(value: Param0, theme: Param1, parsers) {

  const stringParser = get(parsers, 'string', null)
  const numberParser = get(parsers, 'number', null)
  
  const queries = get(theme, 'queries', {})
  const css = []

  // if (value.length === 2) {
  //   map(value, (item, key) => css.push(
  //     `@media(min-width: ${queries[key]}) {

  //     }`
  //   ))
  // }

  // if (value.length === 3) {

  // }

  // map(queries, item => {
  //   css.push(`
  //     @media (min-width: ${item}) {
  //       ${value}
  //     }
  //   `)
  // })

  map(value, (item, key) => {
    if (item) {
      css.push(`
        @media(min-width: ${queries[key]}) {
          ${typeof item === 'string' && stringParser(item)}
          ${typeof item === 'number' && numberParser(item)}
        }
      `)
    }
  })

  return css.join('')
}