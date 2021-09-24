import { map } from 'lodash'
import React from 'react'

import Block from '../Block'
import Teaser, {TeaserProps} from '../Teaser'

export type RenderSlotProps = TeaserProps & {
  column_items: number;
  column_padding: string;
  slot: Array<any>;
}

const RenderSlot = ({
  color,
  column_items,
  column_padding,
  domain,
  image_circle,
  layout,
  slot,
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
            item={item}
            layout={layout}
          />
        </Block>
      ))}
    </React.Fragment>
  )
}

export default RenderSlot