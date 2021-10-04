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
  selectLayoutFromTemplate
} from './utils'

const PageBlock = ({
  cid,
  name,
  type,
  slot1,
  slot2,
  slot3,
  theme
}: PageBlockProps) => {
  const { domain, templates } = theme
  // console.log(`[PRENSA] PageBlock ${cid} ${name} ${type}`)
  if(type === 'template100') {
    const slot100 = selectLayoutFromTemplate({
      block: 'slot100',
      slot: slot1,
      templates
    })
    return (
      <Template100
        slot100={{
          column_items: slot1.len1,
          column_padding: 1,
          domain,
          layouts: slot100,
          slot: slot1.list1
        }}
      />
    )
  }
  if(type === 'template7030') {
    const slot70 = selectLayoutFromTemplate({
      block: 'slot70',
      slot: slot1,
      templates
    })
    const slot30 = selectLayoutFromTemplate({
      block: 'slot30',
      slot: slot2,
      templates
    })
    return (
      <Template7030
        slot70={{
          column_items: slot1.len1,
          column_padding: slot1.len1 > 1 ? (slot1.len1 - 1) : 0,
          domain,
          layouts: slot70,
          slot: slot1.list1
        }}
        slot30={{
          column_items: 1,
          column_padding: 0,
          domain,
          layouts: slot30,
          slot: slot2.list1
        }}
      />
    )
  }
  if(type === 'template30') {
    const slotLeft = selectLayoutFromTemplate({
      block: 'slot30',
      slot: slot1,
      templates
    })
    const slotCenter = selectLayoutFromTemplate({
      block: 'slot30',
      slot: slot2,
      templates
    })
    const slotRight = selectLayoutFromTemplate({
      block: 'slot30',
      slot: slot3,
      templates
    })
    return (
      <Template33
        slotLeft={{
          column_items: slot1.len1,
          column_padding: 1,
          domain,
          layouts: slotLeft,
          slot: slot1.list1
        }}
        slotCenter={{
          column_items: slot2.len1,
          column_padding: 1,
          domain,
          layouts: slotCenter,
          slot: slot2.list1
        }}
        slotRight={{
          column_items: slot3.len1,
          column_padding: 1,
          domain,
          layouts: slotRight,
          slot: slot3.list1
        }}
      />
    )
  }
  const slot100 = selectLayoutFromTemplate({
    block: 'slot100',
    slot: slot1,
    templates
  })
  return (
    <TemplateWrap
      slotItems={{
        column_items: slot1.len1,
        column_padding: 1,
        domain,
        layouts: slot100,
        slot: slot1.list1
      }}
    />
  )
}

export default withTheme(PageBlock)