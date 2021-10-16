import { map } from 'lodash'
import React from 'react'
import { withTheme } from 'styled-components'
import { get } from 'lodash'

import Block from '../Block'
import Teaser from '../Teaser'
import Carousel from '../Carousel'
import { RenderSlotProps } from './types'
import { 
  parseTeaserProps,
  renderSpaceSlot
} from './utils'

const RenderSlot = ({
  carousel,
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
  const column_width = `calc((100% - (${column_padding} * 24px)) / ${column_items})`
  const carousel_enabled = get(carousel, 'enabled', false) 
  const RenderTeaser = () => (
    <React.Fragment>
      {map(slot, (item, key: number) => {
        let teaser_props = parseTeaserProps(key, layout, layouts, slot, teasers)
        if (!teaser_props) return null
        return (
          <Block
            key={key}
            width='100%'
            lg={{ width: column_width }}
          >
            <Teaser
              color={color}
              domain={domain}
              item={item}
              image_circle={image_circle}
              layout={teaser_props.layout}
              related={teaser_props.related}
            />
          </Block>
        )
      })}
    </React.Fragment>
  )

  const RenderCarousel = () => (
    <Carousel {...carousel}>
      <RenderTeaser />
    </Carousel>
  )

  const RenderContent = () => {
    if (carousel_enabled) {
      return <RenderCarousel />
    } else {
      return <RenderTeaser />
    }
  }

  return (
    <React.Fragment>
      {renderSpaceSlot(spaceA)}
      <RenderContent />
      {renderSpaceSlot(spaceB)}
    </React.Fragment>
  )
}

export default withTheme(RenderSlot)