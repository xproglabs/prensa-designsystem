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
  selectLayoutColsFromSlot,
  selectLayoutFromTemplate,
  selectTemplateFromTheme,
  selectSectionTitleFromSlot
} from './utils'

const PageBlock = ({
  type,
  slot1,
  slot2,
  slot3,
  theme
}: PageBlockProps) => {
  const { domain, templates } = theme
  // define slot titles
  const slot1_title = selectSectionTitleFromSlot(slot1.title, slot1.icon, slot1.link)
  const slot2_title = selectSectionTitleFromSlot(slot2.title, slot2.icon, slot2.link)
  const slot3_title = selectSectionTitleFromSlot(slot3.title, slot3.icon, slot3.link)
  if(type === 'template100') {
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
          slot: slot1.list1,
          spaceA: slotsHaveSecionTitle ? slot1_title : null
        }}
      />
    )
  }
  if(type === 'template7030') {
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
          slot: slot1.list1,
          spaceA: slotsHaveSecionTitle ? slot1_title : null
        }}
        slot30={{
          bgcolor: slot2.bgcolor,
          column_items: slot2_spaces + 1,
          column_padding: slot2_spaces,
          domain,
          layouts: slot30_layout,
          slot: slot2.list1,
          spaceA: slotsHaveSecionTitle ? slot2_title : null
        }}
      />
    )
  }
  if(type === 'template50') {
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
          slot: slot1.list1,
          spaceA: slotsHaveSecionTitle ? slot1_title : null
        }}
        slotRight={{
          bgcolor: slot2.bgcolor,
          column_items: slot2_spaces + 1,
          column_padding: slot2_spaces,
          domain,
          layouts: slotRight_layout,
          slot: slot2.list1,
          spaceA: slotsHaveSecionTitle ? slot2_title : null
        }}
      />
    )
  }
  if(type === 'template30') {
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
    return (
      <Template33
        slotLeft={{
          bgcolor: slot1.bgcolor,
          column_items: slot1_spaces + 1,
          column_padding: slot1_spaces,
          domain,
          layouts: slotLeft_layout,
          slot: slot1.list1,
          spaceA: slotsHaveSecionTitle ? slot1_title : null
        }}
        slotCenter={{
          bgcolor: slot2.bgcolor,
          column_items: slot2_spaces + 1,
          column_padding: slot2_spaces,
          domain,
          layouts: slotCenter_layout,
          slot: slot2.list1,
          spaceA: slotsHaveSecionTitle ? slot2_title : null
        }}
        slotRight={{
          bgcolor: slot3.bgcolor,
          column_items: slot3_spaces + 1,
          column_padding: slot3_spaces,
          domain,
          layouts: slotRight_layout,
          slot: slot3.list1,
          spaceA: slotsHaveSecionTitle ? slot3_title : null
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
        slot: slot1.list1,
        spaceA: slotsHaveSecionTitle ? slot1_title : null
      }}
    />
  )
}

export default withTheme(PageBlock)