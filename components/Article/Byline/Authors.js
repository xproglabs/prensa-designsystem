import { map } from 'lodash'
import React from 'react'

import Block from '../../Block'
import Link from '../../Link'
import Typography from '../../Typography'


const ManyAuthors = ({ items }) => {
  const AuthorWithLink = ({ item, showComma, color }) => {
    return (
      // todo: add AuthorWithLink layout
      <>
        <Link href={item.path}>
          <Typography 
            element='span'
            fontFamily='secondary'
            fontWeight={700}
            fontSize='14px'
            color={color}>
            {item.name}
          </Typography>  
        </Link>
        {showComma && (<span>,&nbsp;</span>)}
      </>
    )
  }
  AuthorWithLink.defaultProps = {
    color: 'neutral2'
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
  items: [],
}

export default ManyAuthors
