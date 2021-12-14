import { get } from 'lodash'
import React from 'react'
import { withTheme } from 'styled-components'

import {
  Template100,
  Template7030,
  Template5050,
  Template33
} from '../Templates'
import { PageBlockProps } from './types'
import {
  selectComponentFromSlotList,
  selectLayoutColsFromSlot,
  selectLayoutFromTemplate,
  selectTemplateFromTheme,
  renderSectionTitle
} from './utils'

const PageBlock = ({
  amp,
  domain,
  fallback_image_url,
  preview,
  section_title_component,
  site_data,
  slot_parser,
  slot1,
  slot2,
  slot3,
  slot4,
  theme,
  type,
}: PageBlockProps) => {
  const { section_title, templates } = theme
  // define section_title for slots
  const slot1_title = renderSectionTitle({
    color: slot1?.color,
    icon: slot1?.icon,
    layout: section_title,
    link: slot1?.link,
    title: slot1?.title,
    customComponent: section_title_component
  })
  const slot2_title = renderSectionTitle({
    color: slot2?.color,
    icon: slot2?.icon,
    layout: section_title,
    link: slot2?.link,
    title: slot2?.title,
    customComponent: section_title_component
  })
  const slot3_title = renderSectionTitle({
    color: slot3?.color,
    icon: slot3?.icon,
    layout: section_title,
    link: slot3?.link,
    title: slot3?.title,
    customComponent: section_title_component
  })
  // define slot spaceB
  const slot1_slotList = selectComponentFromSlotList(slot_parser, slot1?.list2, site_data, slot1)
  const slot2_slotList = selectComponentFromSlotList(slot_parser, slot2?.list2, site_data, slot2)
  const slot3_slotList = selectComponentFromSlotList(slot_parser, slot3?.list2, site_data, slot3)
  const slot4_slotList = selectComponentFromSlotList(slot_parser, slot4?.list, site_data, slot4)

  if (type === 'template100') {
    const slot100_block = selectTemplateFromTheme({ block: 'slot100', slot: slot1, templates })
    const slot100_layout = selectLayoutFromTemplate({ block: slot100_block, slot: slot1 })
    const slot1_spaces = selectLayoutColsFromSlot(slot1?.len1, slot100_block.spaces)
    const slot1_space_bottom = slot100_block.space_bottom
    const slotsHaveSecionTitle = slot1?.title !== ''
    return (
      <Template100
        slotAds={{
          column_items: 0,
          column_padding: 0,
          layouts: slot100_layout,
          preview,
          site_data,
          slot: [],
          slot_parser,
          spaceB: slot4_slotList,
        }}
        slot100={{
          amp,
          bgcolor: slot1?.bgcolor,
          color: slot1?.color,
          column_items: slot1_spaces + 1,
          column_padding: slot1_spaces,
          domain,
          fallback_image_url,
          layouts: slot100_layout,
          min_height: slot100_block.min_height,
          order: slot1?.order,
          preview,
          site_data,
          slot: slot1?.list1,
          slot_parser,
          spaceA: slotsHaveSecionTitle ? slot1_title : null,
          spaceB: slot1_slotList,
          space_bottom: slot1_space_bottom
        }}
      />
    )
  }
  if (type === 'template7030') {
    const slot70_block = selectTemplateFromTheme({ block: 'slot70', slot: slot1, templates })
    const slot30_block = selectTemplateFromTheme({ block: 'slot30', slot: slot2, templates })
    const slot70_layout = selectLayoutFromTemplate({ block: slot70_block, slot: slot1 })
    const slot30_layout = selectLayoutFromTemplate({ block: slot30_block, slot: slot2 })
    const slot1_spaces = selectLayoutColsFromSlot(slot1?.len1, slot70_block.spaces)
    const slot2_spaces = selectLayoutColsFromSlot(slot2?.len1, slot30_block.spaces)
    const slot1_space_bottom = get(slot70_block, 'space_bottom', [])
    const slot2_space_bottom = get(slot30_block, 'space_bottom', [])
    const slotsHaveSecionTitle = slot1?.title !== '' || slot2?.title !== ''
    return (
      <Template7030
        slotAds={{
          column_items: 0,
          column_padding: 0,
          layouts: slot70_layout,
          preview,
          site_data,
          slot: [],
          slot_parser,
          spaceB: slot4_slotList,
        }}
        slot70={{
          amp,
          bgcolor: slot1?.bgcolor,
          color: slot1?.color,
          column_items: slot1_spaces + 1,
          column_padding: slot1_spaces,
          domain,
          fallback_image_url,
          min_height: slot70_block.min_height,
          layouts: slot70_layout,
          order: slot1?.order,
          preview,
          site_data,
          slot: slot1?.list1,
          slot_parser,
          spaceA: slotsHaveSecionTitle ? slot1_title : null,
          spaceB: slot1_slotList,
          space_bottom: slot1_space_bottom
        }}
        slot30={{
          amp,
          bgcolor: slot2?.bgcolor,
          color: slot2?.color,
          column_items: slot2_spaces + 1,
          column_padding: slot2_spaces,
          domain,
          fallback_image_url,
          layouts: slot30_layout,
          min_height: slot30_block.min_height,
          order: slot2?.order,
          preview,
          site_data,
          slot: slot2?.list1,
          slot_parser,
          spaceA: slotsHaveSecionTitle ? slot2_title : null,
          spaceB: slot2_slotList,
          space_bottom: slot2_space_bottom
        }}
      />
    )
  }
  if (type === 'template50') {
    const slotLeft_block = selectTemplateFromTheme({ block: 'slot50', slot: slot1, templates })
    const slotRight_block = selectTemplateFromTheme({ block: 'slot50', slot: slot2, templates })
    const slotLeft_layout = selectLayoutFromTemplate({ block: slotLeft_block, slot: slot1 })
    const slotRight_layout = selectLayoutFromTemplate({ block: slotRight_block, slot: slot2 })
    const slot1_spaces = selectLayoutColsFromSlot(slot1?.len1, slotLeft_block.spaces)
    const slot2_spaces = selectLayoutColsFromSlot(slot2?.len1, slotRight_block.spaces)
    const slotsHaveSecionTitle = slot1?.title !== '' || slot2?.title !== ''
    const slot1_space_bottom = get(slotLeft_block, 'space_bottom', [])
    const slot2_space_bottom = get(slotRight_block, 'space_bottom', [])
    return (
      <Template5050
        slotAds={{
          column_items: 0,
          column_padding: 0,
          layouts: slotLeft_layout,
          preview,
          site_data,
          slot: [],
          slot_parser,
          spaceB: slot4_slotList,
        }}
        slotLeft={{
          amp,
          bgcolor: slot1?.bgcolor,
          color: slot1?.color,
          column_items: slot1_spaces + 1,
          column_padding: slot1_spaces,
          domain,
          fallback_image_url,
          layouts: slotLeft_layout,
          min_height: slotLeft_block.min_height,
          order: slot1?.order,
          preview,
          site_data,
          slot: slot1?.list1,
          slot_parser,
          spaceA: slotsHaveSecionTitle ? slot1_title : null,
          spaceB: slot1_slotList,
          space_bottom: slot1_space_bottom
        }}
        slotRight={{
          amp,
          bgcolor: slot2?.bgcolor,
          color: slot2?.color,
          column_items: slot2_spaces + 1,
          column_padding: slot2_spaces,
          domain,
          fallback_image_url,
          layouts: slotRight_layout,
          min_height: slotRight_block.min_height,
          order: slot2?.order,
          preview,
          site_data,
          slot: slot2?.list1,
          slot_parser,
          spaceA: slotsHaveSecionTitle ? slot2_title : null,
          spaceB: slot2_slotList,
          space_bottom: slot2_space_bottom
        }}
      />
    )
  }
  if (type === 'template30') {
    const slotLeft_block = selectTemplateFromTheme({ block: 'slot30', slot: slot1, templates })
    const slotCenter_block = selectTemplateFromTheme({ block: 'slot30', slot: slot2, templates })
    const slotRight_block = selectTemplateFromTheme({ block: 'slot30', slot: slot3, templates })
    const slotLeft_layout = selectLayoutFromTemplate({ block: slotLeft_block, slot: slot1 })
    const slotCenter_layout = selectLayoutFromTemplate({ block: slotCenter_block, slot: slot2 })
    const slotRight_layout = selectLayoutFromTemplate({ block: slotRight_block, slot: slot3 })
    const slot1_spaces = selectLayoutColsFromSlot(slot1?.len1, slotLeft_block.spaces)
    const slot2_spaces = selectLayoutColsFromSlot(slot2?.len1, slotCenter_block.spaces)
    const slot3_spaces = selectLayoutColsFromSlot(slot3?.len1, slotRight_block.spaces)
    const slotsHaveSecionTitle = slot1?.title !== '' || slot2?.title !== '' || slot3?.title !== ''
    /** * Carousel Props */
    const slotLeft_carousel = get(slotLeft_block, 'carousel', {})
    const slotCenter_carousel = get(slotCenter_block, 'carousel', {})
    const slotRight_carousel = get(slotRight_block, 'carousel', {})
    /** * Slot Teaser mb */
    const slot1_space_bottom = get(slotLeft_block, 'space_bottom', [])
    const slot2_space_bottom = get(slotCenter_block, 'space_bottom', [])
    const slot3_space_bottom = get(slotRight_block, 'space_bottom', [])
    return (
      <Template33
        slotAds={{
          column_items: 0,
          column_padding: 0,
          layouts: slotLeft_layout,
          preview,
          site_data,
          slot: [],
          slot_parser,
          spaceB: slot4_slotList,
        }}
        slotLeft={{
          amp,
          bgcolor: slot1?.bgcolor,
          color: slot1?.color,
          carousel: slotLeft_carousel,
          column_items: slot1_spaces + 1,
          column_padding: slot1_spaces,
          domain,
          fallback_image_url,
          layouts: slotLeft_layout,
          min_height: slotLeft_block.min_height,
          order: slot1?.order,
          preview,
          site_data,
          slot: slot1?.list1,
          slot_parser,
          spaceA: slotsHaveSecionTitle ? slot1_title : null,
          spaceB: slot1_slotList,
          space_bottom: slot1_space_bottom
        }}
        slotCenter={{
          amp,
          bgcolor: slot2?.bgcolor,
          color: slot2?.color,
          carousel: slotCenter_carousel,
          column_items: slot2_spaces + 1,
          column_padding: slot2_spaces,
          domain,
          fallback_image_url,
          layouts: slotCenter_layout,
          min_height: slotCenter_block.min_height,
          order: slot2?.order,
          preview,
          site_data,
          slot: slot2?.list1,
          slot_parser,
          spaceA: slotsHaveSecionTitle ? slot2_title : null,
          spaceB: slot2_slotList,
          space_bottom: slot2_space_bottom
        }}
        slotRight={{
          amp,
          bgcolor: slot3?.bgcolor,
          color: slot3?.color,
          carousel: slotRight_carousel,
          column_items: slot3_spaces + 1,
          column_padding: slot3_spaces,
          domain,
          fallback_image_url,
          layouts: slotRight_layout,
          min_height: slotRight_block.min_height,
          order: slot3?.order,
          preview,
          site_data,
          slot: slot3?.list1,
          slot_parser,
          spaceA: slotsHaveSecionTitle ? slot3_title : null,
          spaceB: slot3_slotList,
          space_bottom: slot3_space_bottom
        }}
      />
    )
  }
  
  return <pre>template not found</pre>
}

export default withTheme(PageBlock)