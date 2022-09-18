import { selectComponentFromSlotList } from 'components/PageBlock/utils'
import { get, map, orderBy } from 'lodash'
import React from 'react'
import { withTheme } from 'styled-components'

import Block from '../Block'
import Carousel from '../Carousel'
import Pagination from '../Pagination'
import { PreviewProvider } from '../PreviewProvider'
import Teaser from '../Teaser'
import MoreButton from './MoreButton'
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
  more_button,
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
  split_slot,
  theme
}: RenderSlotProps) => {

  const { teasers } = theme
  const column_width = `calc((100% - (${column_padding} * 24px)) / ${column_items})`
  const carousel_enabled = get(carousel, 'enabled', false)
  const split_slot_enabled = get(split_slot, 'enabled', false)
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

  const RenderListItems = ({ slotItems }) => {
    return (
      <React.Fragment>
        {map(slotItems, (item, key: number) => {
          if(item === null) return false
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
      </React.Fragment>
    )
  }

  const RenderListSplitted = () => {
    const slotItemsLeft = [slot_sorted[0]]
    const slotItemsRight = [null, slot_sorted[1], slot_sorted[2], slot_sorted[3]]
    return (
      <Block lg={{ align: 'row', alignx: 'between' }} width='100%'>
        <Block lg={{ width: 'calc(50% - 12px)'}} width='100%'>
          <RenderListItems slotItems={slotItemsLeft} />
        </Block>
        <Block lg={{ width: 'calc(50% - 12px)'}} width='100%'>
          <RenderListItems slotItems={slotItemsRight} />
        </Block>
      </Block>
    )
  }

  const RenderList = () => {
    return (
      <React.Fragment>
        {split_slot_enabled && slot_sorted.length > 3 ? (
          <RenderListSplitted />
        ) : (
          <RenderListItems slotItems={slot_sorted} />
        )}
        <MoreButton
          {...more_button}
          more={more}
          more_link={more_link}
          more_title={more_title}
        />
        <RenderPagination />
      </React.Fragment>
    )
  }
  if (carousel_enabled) {
    return (
      <Carousel {...carousel}>
        <RenderList />
      </Carousel>
    )
  }

  return <RenderList />
}

const ThemedRenderSlot: any = withTheme(RenderSlot)
export default ThemedRenderSlot