import get from 'lodash/get'
import map from 'lodash/map'
import React from 'react'

import RelatedItem, { RelatedArea } from './RelatedStyled'
import { RelatedProps } from './RelatedTypes'

const Related = ({
  color,
  items,
  layout
}: RelatedProps) => {
  const element = get(layout, 'element', undefined)
  const layout_color = get(layout, 'color', false)
  const items_color = layout_color || color
  return (
    <RelatedArea>
      {map(items, (item, key) => {
        const item_path = get(item, 'url', false) || get(item, 'path', '')
        return (
          <RelatedItem
            key={key}
            color={items_color}
            element={element}
            font_size={layout.font_size}
            font_weight={layout.font_weight}
            icon={layout?.icon}
            line_height={layout.line_height}
            item_path={item_path}
            mb={layout.mb}
            mr={layout.mr}
          >
            {item.name}
          </RelatedItem>
        )
      })}
    </RelatedArea>
  )
}

export default Related