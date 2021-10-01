import { get, map } from 'lodash'
import React from 'react'

import { RelatedArea, RelatedItem } from './RelatedStyled'
import { RelatedRenderProps } from './RelatedTypes'

const Related = ({
  color,
  items,
  layout
}: RelatedRenderProps) => {
  return (
    <RelatedArea>
      {(map(items, (item, key) => {
        const item_path = get(item, 'url', false) || get(item, 'path', '')
        return (
          <RelatedItem
            key={key}
            color={color || layout.color}
            font_size={layout.font_size}
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

Related.defaultProps = {
  layout: {
    color: 'black',
    font_size: ['14px', '14px'],
    line_height: ['16px', '16px'],
    mb: [2, 2]
  }
}

export default Related