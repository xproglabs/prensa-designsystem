import { filter, map } from 'lodash'

import { removeSpaces, stringIsBlank } from './utils'

export function parseListChildren(child) {

  const list_data = filter(child, { tag: 'li' })
  const html = []
  let hasHyperlink = []

  map(list_data, (it) => {
    map(it.child,
      (text_item) => {
        const { attr, child, tag, text, node } = text_item

        if (node === 'element' && tag === 'p') {
          map(child, item => {
            html.push(
              item.text
            )
          })
        }

        if (node === 'element' && tag === 'a') {
          map(child, hyperlinkedText => {
            hasHyperlink.push(
              `<a href="${attr.href}" target="_blank">${hyperlinkedText.text}</a>`
            )
          })
        }

        if (hasHyperlink.length > 0) {
          if (node === 'text') {
            hasHyperlink.push(
              text
            )
          }
        }

        if (hasHyperlink.length === 0 && !child && !stringIsBlank()) {
          html.push(
            removeSpaces(
              text
            )
          )
        }
      }
    )

    if (hasHyperlink.length > 0) {
      html.push(
        removeSpaces(
          hasHyperlink.join('')
        )
      )
      hasHyperlink = []
    }
  })

  return html
}