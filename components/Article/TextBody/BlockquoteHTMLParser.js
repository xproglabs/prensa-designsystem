import { map } from 'lodash'

import { removeSpaces } from './utils'

export function BlockquoteHTMLParser(data) {

  const html = []

  function parseInnerHTML(data) {

    if (!data) {
      return ''
    }
  
    if (data.text !== '') {
      html.push(
        removeSpaces(
          data.text
        )
      )
    }
  }
  
  map(data, levelOne => {
    if (!levelOne.child) {
      html.push(parseInnerHTML(levelOne))
    } else {
      map(levelOne.child, levelTwo => {
        if (!levelTwo.child) {
          html.push(parseInnerHTML(levelTwo))
        } else {
          map(levelTwo.child, levelThree => {
            html.push(parseInnerHTML(levelThree))
          })
        }
      })
    }
  })

  return html.join('')
}