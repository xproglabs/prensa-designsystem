import { get } from 'lodash'
import React from 'react'
import { withTheme } from 'styled-components'

import {
  Template100,
  Template7030,
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
    const slot100 = selectLayoutFromTemplate({ block: slot100_block, slot: slot1 })
    const slot1_spaces = selectLayoutColsFromSlot(slot1.len1, slot100_block.spaces)
    return (
      <Template100
        slot100={{
          column_items: slot1_spaces + 1,
          column_padding: slot1_spaces,
          domain,
          layouts: slot100,
          slot: slot1.list1
        }}
      />
    )
  }
  if(type === 'template7030') {
    const slot70_block = selectTemplateFromTheme({ block: 'slot70', slot: slot1, templates })
    const slot30_block = selectTemplateFromTheme({ block: 'slot30', slot: slot2, templates })
    const slot70 = selectLayoutFromTemplate({ block: slot70_block, slot: slot1 })
    const slot30 = selectLayoutFromTemplate({ block: slot30_block, slot: slot2 })
    const slot1_spaces = selectLayoutColsFromSlot(slot1.len1, slot70_block.spaces)
    const slot2_spaces = selectLayoutColsFromSlot(slot2.len1, slot30_block.spaces)
    return (
      <Template7030
        slot70={{
          column_items: slot1_spaces + 1,
          column_padding: slot1_spaces,
          domain,
          layouts: slot70,
          slot: slot1.list1
        }}
        slot30={{
          column_items: slot2_spaces + 1,
          column_padding: slot2_spaces,
          domain,
          layouts: slot30,
          slot: slot2.list1
        }}
      />
    )
  }
  if(type === 'template30') {
    const slotLeft_block = selectTemplateFromTheme({ block: 'slot30', slot: slot1, templates })
    const slotCenter_block = selectTemplateFromTheme({ block: 'slot30', slot: slot2, templates })
    const slotRight_block = selectTemplateFromTheme({ block: 'slot30', slot: slot3, templates })
    const slotLeft = selectLayoutFromTemplate({ block: slotLeft_block, slot: slot1 })
    const slotCenter = selectLayoutFromTemplate({ block: slotCenter_block, slot: slot2 })
    const slotRight = selectLayoutFromTemplate({ block: slotRight_block, slot: slot3 })
    const slot1_spaces = selectLayoutColsFromSlot(slot1.len1, slotLeft_block.spaces)
    const slot2_spaces = selectLayoutColsFromSlot(slot2.len1, slotCenter_block.spaces)
    const slot3_spaces = selectLayoutColsFromSlot(slot3.len1, slotRight_block.spaces)
    return (
      <Template33
        slotLeft={{
          column_items: slot1_spaces + 1,
          column_padding: slot1_spaces,
          domain,
          layouts: slotLeft,
          slot: slot1.list1
        }}
        slotCenter={{
          column_items: slot2_spaces + 1,
          column_padding: slot2_spaces,
          domain,
          layouts: slotCenter,
          slot: slot2.list1
        }}
        slotRight={{
          column_items: slot3_spaces + 1,
          column_padding: slot3_spaces,
          domain,
          layouts: slotRight,
          slot: slot3.list1
        }}
      />
    )
  }
  const slot100_block = selectTemplateFromTheme({ block: 'slot100', slot: slot1, templates })
  const slot100 = selectLayoutFromTemplate({ block: slot100_block, slot: slot1 })
  const slot1_spaces = selectLayoutColsFromSlot(slot1.len1, slot100_block.spaces)
  return (
    <TemplateWrap
      slotItems={{
        column_items: slot1_spaces + 1,
        column_padding: slot1_spaces,
        domain,
        layouts: slot100,
        slot: slot1.list1
      }}
    />
  )
}

export default withTheme(PageBlock)