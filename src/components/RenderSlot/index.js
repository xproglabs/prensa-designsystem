import { map } from 'lodash'
import React from 'react'

import Block from '../Block'
import Teaser from '../Teaser'

const RenderSlot = ({
  color,
  column_items,
  column_padding,
  domain,
  image_circle,
  // image_options,
  layout,
  has_number,
  slot,
  type
}) => {
  const column_width = `calc(calc(100% - calc(${column_padding} * 16px)) / ${column_items})`

  return map(slot, (item, key) => (
    <Block
      width="100%"
      lg={{ width: column_width }}
    >
      <Teaser
        color={color}
        domain={domain}
        image_circle={image_circle}
        // image_options={image_options}
        item={item}
        key={key}
        layout={layout}
        number={key}
        has_number={has_number}
        type={type}
      />
    </Block>
  ))
}

export default RenderSlot