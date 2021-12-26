import { Typography } from 'prensa'
import React from 'react'

import { ListItem } from './ListItem'
import { OrderedList } from './OrderedList'
import { ListComponentProps } from './types'
import { UnorderedList } from './UnorderedList'

const ListComponent = ({ items, itemsSpace, maxWidth, ordered }: ListComponentProps) => {

  if (items?.length === 0) {
    return null
  }

  function renderItems() {
    return items?.map((entry, key) => (
      <ListItem
        key={key}
        mb={itemsSpace}
      >
        <Typography
          fontFamily='primary'
          fontSize='20px'
          lineHeight='160%'
          element='span'
        >
          {entry}
        </Typography>
      </ListItem>
    ))
  }

  if (ordered) {
    return (
      <OrderedList maxWidth={maxWidth}>
        {renderItems()}
      </OrderedList>
    )
  } else {
    return (
      <UnorderedList maxWidth={maxWidth}>
        {renderItems()}
      </UnorderedList>
    )
  }
}

ListComponent.defaultProps = {
  itemsSpace: 1
}

export { ListComponent }