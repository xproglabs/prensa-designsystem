import { map } from 'lodash'

import { EmHTMLParser } from './EmHTMLParser'

export function StrongHTMLParser(data) {

  if (!data) return ''

  const html = []

  map(data, item => {
    if (item.tag === 'em') {
      html.push(EmHTMLParser(item.child))
    }
    if (item.tag === 'br') {
      html.push('<br/>')
    }
    if (item.text !== '') {
      html.push(item.text)
    }
  })

  return `<strong>${html.join('')}</strong>`
}