import { map } from 'lodash'
import React from 'react'

import Block from '../Block'
import Teaser from '../Teaser'

export type RenderSlotProps = {
  color: string;
  column_items: number;
  column_padding: string;
  domain: string;
  image_circle?: boolean;
  layout: object;
  has_number: boolean;
  slot: Array<any>;
}

const RenderSlot = ({
  color,
  column_items,
  column_padding,
  domain,
  image_circle,
  layout,
  has_number,
  slot
}: RenderSlotProps) => {
  
  const column_width = `calc(calc(100% - calc(${column_padding} * 16px)) / ${column_items})`

  return (
    <React.Fragment>
      {map(slot, (item, key: number) => (
        <Block
          key={key}
          width="100%"
          lg={{ width: column_width }}
        >
          <Teaser
            color={color}
            domain={domain}
            image_circle={image_circle}
            // image_options={image_options}
            item={item}
            layout={layout}
            number={key}
            has_number={has_number}
          />
        </Block>
      ))}
    </React.Fragment>
  )
}

export default RenderSlot