import { map } from 'lodash'

import { StrongHTMLParser } from './StrongHTMLParser'
import { removeSpaces } from './utils'

export function BlockquoteHTMLParser(data) {

  const html = []

  map(data, item => {
    if (!item.child) {
      html.push(item.text)
    }

    if (item.child && item.child.length > 0) {
      map(item.child, subitem => {
        if (subitem.child && subitem.child.length > 0) {
          map(subitem.child, levelthree => {
            if (levelthree.node === 'element' && levelthree.type === 'strong') {
              html.push(
                StrongHTMLParser(levelthree)
              )
            }

            if (levelthree.text !== '') {
              html.push(
                removeSpaces(
                  levelthree.text
                )
              )
            }
          })
        }
      })
    }
  })

  return html.join('')
}