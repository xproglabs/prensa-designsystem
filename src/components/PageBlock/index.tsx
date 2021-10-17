import { get } from 'lodash'
import React from 'react'
import { withTheme } from 'styled-components'

import {
  Template100,
  Template7030,
  Template5050,
  Template33,
  TemplateWrap
} from '../Templates'
import {
  PageBlockProps
} from './types'
import {
  selectComponentFromSlotList,
  selectLayoutColsFromSlot,
  selectLayoutFromTemplate,
  selectTemplateFromTheme,
  selectSectionTitleFromSlot
} from './utils'

const PageBlock = ({
  parseSlot,
  preview,
  slot1,
  slot2,
  slot3,
  theme,
  type,
}: PageBlockProps) => {
  const { domain, sections, templates } = theme
  // define slot titles
  const slot1_title = selectSectionTitleFromSlot(sections, slot1.title, slot1.icon, slot1.link)
  const slot2_title = selectSectionTitleFromSlot(sections, slot2.title, slot2.icon, slot2.link)
  const slot3_title = selectSectionTitleFromSlot(sections, slot3.title, slot3.icon, slot3.link)
  // define slot spaceB
  const slot1_slotList = selectComponentFromSlotList(parseSlot, slot1.list2)
  const slot2_slotList = selectComponentFromSlotList(parseSlot, slot2.list2)
  const slot3_slotList = selectComponentFromSlotList(parseSlot, slot3.list2)
  if (type === 'template100') {
    const slot100_block = selectTemplateFromTheme({ block: 'slot100', slot: slot1, templates })
    const slot100_layout = selectLayoutFromTemplate({ block: slot100_block, slot: slot1 })
    const slot1_spaces = selectLayoutColsFromSlot(slot1.len1, slot100_block.spaces)
    const slotsHaveSecionTitle = slot1.title !== ''
    return (
      <Template100
        slot100={{
          bgcolor: slot1.bgcolor,
          column_items: slot1_spaces + 1,
          column_padding: slot1_spaces,
          domain,
          layouts: slot100_layout,
          preview,
          slot: slot1.list1,
          spaceA: slotsHaveSecionTitle ? slot1_title : null,
          spaceB: slot1_slotList
        }}
      />
    )
  }
  if (type === 'template7030') {
    const slot70_block = selectTemplateFromTheme({ block: 'slot70', slot: slot1, templates })
    const slot30_block = selectTemplateFromTheme({ block: 'slot30', slot: slot2, templates })
    const slot70_layout = selectLayoutFromTemplate({ block: slot70_block, slot: slot1 })
    const slot30_layout = selectLayoutFromTemplate({ block: slot30_block, slot: slot2 })
    const slot1_spaces = selectLayoutColsFromSlot(slot1.len1, slot70_block.spaces)
    const slot2_spaces = selectLayoutColsFromSlot(slot2.len1, slot30_block.spaces)
    const slotsHaveSecionTitle = slot1.title !== '' || slot2.title !== ''
    return (
      <Template7030
        slot70={{
          bgcolor: slot1.bgcolor,
          column_items: slot1_spaces + 1,
          column_padding: slot1_spaces,
          domain,
          layouts: slot70_layout,
          preview,
          slot: slot1.list1,
          spaceA: slotsHaveSecionTitle ? slot1_title : null,
          spaceB: slot1_slotList
        }}
        slot30={{
          bgcolor: slot2.bgcolor,
          column_items: slot2_spaces + 1,
          column_padding: slot2_spaces,
          domain,
          layouts: slot30_layout,
          preview,
          slot: slot2.list1,
          spaceA: slotsHaveSecionTitle ? slot2_title : null,
          spaceB: slot2_slotList
        }}
      />
    )
  }
  if (type === 'template50') {
    const slotLeft_block = selectTemplateFromTheme({ block: 'slot50', slot: slot1, templates })
    const slotRight_block = selectTemplateFromTheme({ block: 'slot50', slot: slot2, templates })
    const slotLeft_layout = selectLayoutFromTemplate({ block: slotLeft_block, slot: slot1 })
    const slotRight_layout = selectLayoutFromTemplate({ block: slotRight_block, slot: slot2 })
    const slot1_spaces = selectLayoutColsFromSlot(slot1.len1, slotLeft_block.spaces)
    const slot2_spaces = selectLayoutColsFromSlot(slot2.len1, slotRight_block.spaces)
    const slotsHaveSecionTitle = slot1.title !== '' || slot2.title !== ''
    return (
      <Template5050
        slotLeft={{
          bgcolor: slot1.bgcolor,
          column_items: slot1_spaces + 1,
          column_padding: slot1_spaces,
          domain,
          layouts: slotLeft_layout,
          preview,
          slot: slot1.list1,
          spaceA: slotsHaveSecionTitle ? slot1_title : null,
          spaceB: slot1_slotList
        }}
        slotRight={{
          bgcolor: slot2.bgcolor,
          column_items: slot2_spaces + 1,
          column_padding: slot2_spaces,
          domain,
          layouts: slotRight_layout,
          preview,
          slot: slot2.list1,
          spaceA: slotsHaveSecionTitle ? slot2_title : null,
          spaceB: slot2_slotList
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
    const slot1_spaces = selectLayoutColsFromSlot(slot1.len1, slotLeft_block.spaces)
    const slot2_spaces = selectLayoutColsFromSlot(slot2.len1, slotCenter_block.spaces)
    const slot3_spaces = selectLayoutColsFromSlot(slot3.len1, slotRight_block.spaces)
    const slotsHaveSecionTitle = slot1.title !== '' || slot2.title !== '' || slot3.title !== ''
    /** * Carousel Props */
    const slotLeft_carousel = get(slotLeft_block, 'carousel', {})
    const slotCenter_carousel = get(slotCenter_block, 'carousel', {})
    const slotRight_carousel = get(slotRight_block, 'carousel', {})
    return (
      <Template33
        slotLeft={{
          bgcolor: slot1.bgcolor,
          carousel: slotLeft_carousel,
          column_items: slot1_spaces + 1,
          column_padding: slot1_spaces,
          domain,
          layouts: slotLeft_layout,
          preview,
          slot: slot1.list1,
          spaceA: slotsHaveSecionTitle ? slot1_title : null,
          spaceB: slot1_slotList
        }}
        slotCenter={{
          bgcolor: slot2.bgcolor,
          carousel: slotCenter_carousel,
          column_items: slot2_spaces + 1,
          column_padding: slot2_spaces,
          domain,
          layouts: slotCenter_layout,
          preview,
          slot: slot2.list1,
          spaceA: slotsHaveSecionTitle ? slot2_title : null,
          spaceB: slot2_slotList
        }}
        slotRight={{
          bgcolor: slot3.bgcolor,
          carousel: slotRight_carousel,
          column_items: slot3_spaces + 1,
          column_padding: slot3_spaces,
          domain,
          layouts: slotRight_layout,
          preview,
          slot: slot3.list1,
          spaceA: slotsHaveSecionTitle ? slot3_title : null,
          spaceB: slot3_slotList
        }}
      />
    )
  }
  const slowWrap_block = selectTemplateFromTheme({ block: 'slot100', slot: slot1, templates })
  const slowWrap_layout = selectLayoutFromTemplate({ block: slowWrap_block, slot: slot1 })
  const slot1_spaces = selectLayoutColsFromSlot(slot1.len1, slowWrap_block.spaces)
  const slotsHaveSecionTitle = slot1.title !== ''
  return (
    <TemplateWrap
      slotItems={{
        bgcolor: slot1.bgcolor,
        column_items: slot1_spaces + 1,
        column_padding: slot1_spaces,
        domain,
        layouts: slowWrap_layout,
        preview,
        slot: slot1.list1,
        spaceA: slotsHaveSecionTitle ? slot1_title : null,
        spaceB: slot1_slotList
      }}
    />
  )
}

export default withTheme(PageBlock)