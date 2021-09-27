import { map } from 'lodash'
import React from 'react'
import { withTheme } from 'styled-components'

import Block from '../Block'
import Teaser from '../Teaser'
import { RenderSlotProps } from './types'
import { parseTeaserProps } from './utils'

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
        let teaser_props = parseTeaserProps(key, layout, layouts, slot, teasers)
        if(!teaser_props)
          return null
        return (
          <Block
            key={key}
            width='100%'
            lg={{ width: column_width }}>
            <Teaser
              color={color}
              domain={domain}
              image_circle={image_circle}
              item={item}
              spaceA={spaceA}
              spaceB={spaceB}
              layout={teaser_props.layout}
              related={teaser_props.related}
            />
          </Block>
        )
      })}
    </React.Fragment>
  )
}

export default withTheme(RenderSlot)