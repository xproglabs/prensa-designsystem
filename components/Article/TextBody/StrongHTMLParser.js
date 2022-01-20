import { map } from 'lodash'

export function StrongHTMLParser(data) {

  const html = []

  map(data,
    ({ tag, text }) => {

      if (tag === 'br') {
        html.push('<br/>')
      }

      if (text !== '') {
        html.push(text)
      }
    }
  )

  return `<strong>${html.join('')}</strong>`
}