import { get, map } from 'lodash'
import React from 'react'

import RelatedItem, { RelatedArea } from './RelatedStyled'
import { RelatedProps } from './RelatedTypes'

const Related = ({
  color,
  items,
  layout
}: RelatedProps) => {
  return (
    <RelatedArea>
      {(map(items, (item, key) => {
        const item_path = get(item, 'url', false) || get(item, 'path', '')
        return (
          <RelatedItem
            key={key}
            color={color || layout.color}
            font_size={layout.font_size}
            font_weight={layout.font_weight}
            icon={layout?.icon || {}}
            line_height={layout.line_height}
            item_path={item_path}
            mb={layout.mb}>
            {item.name}
          </RelatedItem>
        )
      }))}
    </RelatedArea>
  )
}

export default Related