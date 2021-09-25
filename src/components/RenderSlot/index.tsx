import { map } from 'lodash'
import React from 'react'
import { withTheme } from 'styled-components'

import Block from '../Block'
import Teaser from '../Teaser'
import { RenderSlotProps } from './types'

const RenderSlot = ({
  color,
  column_items,
  column_padding,
  domain,
  image_circle,
  layout,
  layouts,
  slot,
  spaceA,
  spaceB,
  theme
}: RenderSlotProps) => {
  const { teasers } = theme
  const column_width = `calc(calc(100% - calc(${column_padding} * 16px)) / ${column_items})`
  return (
    <React.Fragment>
      {map(slot, (item, key: number) => {
        // select layout from pageblocks
        let teaser_layout = layout
        if(layouts && layouts[key]) {
          teaser_layout = teasers[layouts[key]]
        }
        return (
          <Block
            key={key}
            width="100%"
            lg={{ width: column_width }}>
            <Teaser
              color={color}
              domain={domain}
              image_circle={image_circle}
              item={item}
              layout={teaser_layout}
              spaceA={spaceA}
              spaceB={spaceB}
            />
          </Block>
        )
      })}
    </React.Fragment>
  )
}

export default withTheme(RenderSlot)