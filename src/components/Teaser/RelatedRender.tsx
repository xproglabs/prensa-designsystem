import { get, map } from 'lodash'
import React from 'react'

import { RelatedArea, RelatedItem } from './RelatedStyled'
import { RelatedRenderProps } from './RelatedTypes'

const Related = ({
  color,
  items,
  layout
}: RelatedRenderProps) => {
  const font_color = color ? color : get(layout, 'related.color', 'black')
  const font_size = get(layout, 'related.font_size', ['14px', '14px'])
  const line_height = get(layout, 'related.line_height', ['16px', '16px'])
  const mb = get(layout, 'related.mb', [2, 2])
  return (
    <RelatedArea>
      {(map(items, (item, key) => {
        const item_path = get(item, 'url', false) || get(item, 'path', '')
        return (
          <RelatedItem
            key={key}
            color={font_color}
            font_size={font_size}
            line_height={line_height}
            item_path={item_path}
            mb={mb}>
            {item.name}
          </RelatedItem>
        )
      }))}
    </RelatedArea>
  )
}

export default Related