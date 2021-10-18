import { get, map } from 'lodash'
import React from 'react'
import { withTheme } from 'styled-components'

import Block from '../Block'
import Carousel from '../Carousel'
import Teaser from '../Teaser'
import { RenderSlotProps } from './types'
import { parseTeaserProps } from './utils'
/**
 * Render Slot component
 * @returns
 */
const RenderSlot = ({
  carousel,
  color,
  column_items,
  column_padding,
  domain,
  layout,
  layouts,
  preview,
  slot,
  theme
}: RenderSlotProps) => {
  const { teasers } = theme
  const column_width = `calc((100% - (${column_padding} * 24px)) / ${column_items})`
  const carousel_enabled = get(carousel, 'enabled', false)
  const RenderPreview = preview && preview.render || <React.Fragment />
  const RenderTeaser = () => (
    <React.Fragment>
      {map(slot, (item, key: number) => {
        let teaser_props = parseTeaserProps(key, layout, layouts, slot, teasers)
        if (!teaser_props) return null
        return (
          <Block
            key={key}
            custom='align-self: flex-start;'
            width='100%'
            lg={{ width: column_width }}>
            <RenderPreview
              preview={preview}
              text={item?.name}
              subject={item?.subject}>
              <Teaser
                color={color}
                domain={domain}
                item={item}
                layout={teaser_props.layout}
                preview={preview.enabled}
                related={teaser_props.related}
              />
            </RenderPreview>
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
  if (carousel_enabled) {
    return <RenderCarousel />
  }
  return <RenderTeaser />
}

export default withTheme(RenderSlot)