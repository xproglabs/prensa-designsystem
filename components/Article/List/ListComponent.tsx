import React from 'react'

import Typography from '../../Typography'
import { ListItem } from './ListItem'
import { OrderedList } from './OrderedList'
import { ListComponentProps } from './types'
import { UnorderedList } from './UnorderedList'

const ListComponent = ({
  items,
  itemsSpace,
  maxWidth,
  ordered,
  textProps
}: ListComponentProps) => {

  if (items?.length === 0) {
    return null
  }

  const renderItems = () => {
    return items?.map((entry, key) => (
      <ListItem
        $fontFamily='primary'
        $fontSize='20px'
        key={key}
        mb={itemsSpace}
        value={ordered ? key + 1 : undefined}
        {...textProps}
      >
        <Typography
          color='neutral2'
          fontFamily='primary'
          fontSize='20px'
          lineHeight='160%'
          element='span'
          dangerouslySetInnerHTML={{ __html: entry }}
          {...textProps}
        />
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