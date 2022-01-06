import { selectComponentFromSlotList } from 'components/PageBlock/utils'
import { get, map, orderBy } from 'lodash'
import { Button } from 'prensa'
import React from 'react'
import { withTheme } from 'styled-components'

import Block from '../Block'
import Carousel from '../Carousel'
import Pagination from '../Pagination'
import { PreviewProvider } from '../PreviewProvider'
import Teaser from '../Teaser'
import { RenderSlotProps } from './types'
import {
  parseTeaserProps,
  renderSpaceSlot
} from './utils'

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
  eventTracking,
  fallback_image_url,
  layout,
  layouts,
  order,
  more,
  more_link,
  more_title,
  pagination,
  preview,
  search_len,
  site_data,
  slot,
  slot_parser,
  slot_position,
  space_bottom,
  theme
}: RenderSlotProps) => {

  const { teasers } = theme
  const column_width = `calc((100% - (${column_padding} * 24px)) / ${column_items})`
  const carousel_enabled = get(carousel, 'enabled', false)
  const space_bottom_mobile = get(space_bottom, '[0]', 2)
  const space_bottom_desktop = get(space_bottom, '[1]', 3)

  let slot_sorted = slot
  if (order) {
    try {
      slot_sorted = orderBy(slot, [get(order, [0])], [get(order, [1])])
    } catch (e) {
      slot_sorted = slot
    }
  }

  const RenderPagination = () => {
    if (!pagination) {
      return null
    }
    return (
      <Pagination {...search_len} />
    )
  }

  const RenderMoreButton = () => {
    if (!more) {
      return null
    }
    return (
      <Block
        mb={3}
        width='100%'>
        <Button
          color='neutral4'
          borderColor='neutral4'
          fontSize={16}
          size={6}
          path={more_link}
          variant='outlined'
          width='calc(100% - 32px)'>
          {more_title}
        </Button>
      </Block>
    )
  }

  const RenderSpace = ({ item }) => {
    if (item && item['input-template']) {
      if (slot_parser) {
        const space = selectComponentFromSlotList(slot_parser, [item], site_data, color)
        return renderSpaceSlot(space)
      }
    }
    return null
  }

  const RenderTeaser = ({ item, number }) => {
    if (item && item['input-template']) {
      return null
    }
    let teaser_props = parseTeaserProps(number, layout, layouts, slot_sorted, teasers)
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
          eventTracking={eventTracking}
          fallback_image_url={fallback_image_url}
          item={item}
          layout={teaser_props.layout}
          related={teaser_props.related}
          slot_position={slot_position}
          number={teaser_number}
        />
      </PreviewProvider>
    )
  }
  const RenderList = () => (
    <React.Fragment>
      {map(slot_sorted, (item, key: number) => {
        return (
          <Block
            key={key}
            custom='align-self: flex-start;'
            mb={space_bottom_mobile}
            width='100%'
            lg={{ mb: space_bottom_desktop, width: column_width }}>
            <RenderTeaser item={item} number={key} />
            <RenderSpace item={item} />
          </Block>
        )
      })}
      <RenderMoreButton />
      <RenderPagination />
    </React.Fragment>
  )

  if (carousel_enabled) {
    return (
      <Carousel {...carousel}>
        <RenderList />
      </Carousel>
    )
  }

  return <RenderList />
}

export default withTheme(RenderSlot)