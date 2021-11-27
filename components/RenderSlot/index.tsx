import { selectComponentFromSlotList } from 'components/PageBlock/utils'
import { get, map } from 'lodash'
import React from 'react'
import { withTheme } from 'styled-components'

import Block from '../Block'
import Carousel from '../Carousel'
import { PreviewProvider } from '../PreviewProvider'
import Teaser from '../Teaser'
import { RenderSlotProps } from './types'
import { parseTeaserProps, renderSpaceSlot } from './utils'

/**
 * Render Slot component
 */
const RenderSlot = ({
  amp,
  carousel,
  color,
  column_items,
  column_padding,
  domain,
  fallback_image_url,
  layout,
  layouts,
  preview,
  site_data,
  slot,
  slot_parser,
  space_bottom,
  theme
}: RenderSlotProps) => {

  const { teasers } = theme
  const column_width = `calc((100% - (${column_padding} * 24px)) / ${column_items})`
  const carousel_enabled = get(carousel, 'enabled', false)
  const space_bottom_sm = get(space_bottom, '[0]', 2)
  const space_bottom_lg = get(space_bottom, '[1]', 3)

  const RenderSpace = ({ item }) => {
    if (item && item['input-template']) {
      if (slot_parser) {
        const space = selectComponentFromSlotList(slot_parser, [item], site_data, slot)
        return renderSpaceSlot(space)
      }
    }
    return null
  }

  const RenderTeaser = ({ item, number }) => {
    if (item && item['input-template']) {
      return null
    }
    let teaser_props = parseTeaserProps(number, layout, layouts, slot, teasers)
    if (!teaser_props) {
      return null
    }
    const teaser_number = number + 1
    return (
      <PreviewProvider
        item={item}
        preview={preview}>
        <Teaser
          amp={amp}
          color={color}
          domain={domain}
          fallback_image_url={fallback_image_url}
          item={item}
          layout={teaser_props.layout}
          related={teaser_props.related}
          number={teaser_number}
        />
      </PreviewProvider>
    )
  }

  const RenderList = () => (
    <React.Fragment>
      {map(slot, (item, key: number) => {
        return (
          <Block
            key={key}
            custom='align-self: flex-start;'
            mb={space_bottom_sm}
            width='100%'
            lg={{ mb: space_bottom_lg, width: column_width }}>
            <RenderTeaser item={item} number={key} />
            <RenderSpace item={item} />
          </Block>
        )
      })}
    </React.Fragment>
  )

  if (carousel_enabled) {
    <Carousel {...carousel}>
      <RenderList />
    </Carousel>
  }

  return <RenderList />
}

export default withTheme(RenderSlot)