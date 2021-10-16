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
  selectTemplateFromTheme
} from './utils'

const PageBlock = ({
  type,
  slot1,
  slot2,
  slot3,
  theme
}: PageBlockProps) => {
  const { domain, templates } = theme
  // console.log(`[PRENSA] PageBlock ${cid} ${name} ${type}`)
  if(type === 'template100') {
    const slot100_block = selectTemplateFromTheme({ block: 'slot100', slot: slot1, templates })
    const slot100_layout = selectLayoutFromTemplate({ block: slot100_block, slot: slot1 })
    const slot1_spaces = selectLayoutColsFromSlot(slot1.len1, slot100_block.spaces)
    return (
      <Template100
        slot100={{
          bgcolor: slot1.bgcolor,
          column_items: slot1_spaces + 1,
          column_padding: slot1_spaces,
          domain,
          layouts: slot100_layout,
          slot: slot1.list1
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
    return (
      <Template7030
        slot70={{
          bgcolor: slot1.bgcolor,
          column_items: slot1_spaces + 1,
          column_padding: slot1_spaces,
          domain,
          layouts: slot70_layout,
          slot: slot1.list1
        }}
        slot30={{
          bgcolor: slot2.bgcolor,
          column_items: slot2_spaces + 1,
          column_padding: slot2_spaces,
          domain,
          layouts: slot30_layout,
          slot: slot2.list1
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
    return (
      <Template5050
        slotLeft={{
          bgcolor: slot1.bgcolor,
          column_items: slot1_spaces + 1,
          column_padding: slot1_spaces,
          domain,
          layouts: slotLeft_layout,
          slot: slot1.list1
        }}
        slotRight={{
          bgcolor: slot2.bgcolor,
          column_items: slot2_spaces + 1,
          column_padding: slot2_spaces,
          domain,
          layouts: slotRight_layout,
          slot: slot2.list1
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
          slot: slot1.list1
        }}
        slotCenter={{
          bgcolor: slot2.bgcolor,
          carousel: slotCenter_carousel,
          column_items: slot2_spaces + 1,
          column_padding: slot2_spaces,
          domain,
          layouts: slotCenter_layout,
          slot: slot2.list1
        }}
        slotRight={{
          bgcolor: slot3.bgcolor,
          carousel: slotRight_carousel,
          column_items: slot3_spaces + 1,
          column_padding: slot3_spaces,
          domain,
          layouts: slotRight_layout,
          slot: slot3.list1
        }}
      />
    )
  }
  const slowWrap_block = selectTemplateFromTheme({ block: 'slot100', slot: slot1, templates })
  const slowWrap_layout = selectLayoutFromTemplate({ block: slowWrap_block, slot: slot1 })
  const slot1_spaces = selectLayoutColsFromSlot(slot1.len1, slowWrap_block.spaces)
  return (
    <TemplateWrap
      slotItems={{
        bgcolor: slot1.bgcolor,
        column_items: slot1_spaces + 1,
        column_padding: slot1_spaces,
        domain,
        layouts: slowWrap_layout,
        slot: slot1.list1
      }}
    />
  )
}

export default withTheme(PageBlock)