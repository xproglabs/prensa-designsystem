import { map } from 'lodash'
import React from 'react'

import Block from '../../Block'

const ManyAuthors = ({ items }) => {
  const AuthorWithLink = ({ item, showComma }) => {
    return (
      // todo: add AuthorWithLink layout
      <>
        <a href={item.path}>{item.name}</a>
        {showComma && (<span>,&nbsp;</span>)}
      </>
    )
  }
  return (
    <Block align='row'>
      {map(items, (item, key) => {
        const isLastItem = items.length - 1 === key
        return <AuthorWithLink item={item} key={key} showComma={!isLastItem} />
      })}
    </Block>
  )
}

ManyAuthors.defaultProps = {
  items: []
}

export default ManyAuthors
