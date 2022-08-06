import { map } from 'lodash'

import { StrongHTMLParser } from './StrongHTMLParser'

export function EmHTMLParser(data) {

  if (!data) return ''

  const html = []

  map(data, item => {
    if (item.tag === 'strong') {
      html.push(StrongHTMLParser(item.child))
    }
    if (item.text !== '') {
      html.push(item.text)
    }
  })

  return `<em>${html.join('')}</em>`
}