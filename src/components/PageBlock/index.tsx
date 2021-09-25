import { get } from 'lodash'
import React from 'react'
import { withTheme } from 'styled-components'

import {
  Template100,
  Template7030,
  Template33,
  TemplateWrap
} from '../../templates'
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
  const { teasers, templates } = theme
  // console.log(`[PRENSA] PageBlock ${cid} ${name} ${type}`)
  if(type === 'template100') {
    const slot100 = selectLayoutFromTemplate({
      block: 'slot100',
      slot: slot1,
      templates
    })
    return (
      <Template100
        template={type}
        slot100={{
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
        template={type}
        slot70={{
          layouts: slot70,
          slot: slot1.list1
        }}
        slot30={{
          layouts: slot30,
          slot: slot2.list1
        }}
      />
    )
  }
  if(type === 'template30') {
    const slotLeft = selectLayoutFromTemplate({
      block: 'slotLeft',
      slot: slot1,
      templates
    })
    const slotCenter = selectLayoutFromTemplate({
      block: 'slotCenter',
      slot: slot2,
      templates
    })
    const slotRight = selectLayoutFromTemplate({
      block: 'slotRight',
      slot: slot3,
      templates
    })
    return (
      <Template33
        template={type}
        slotLeft={{
          layouts: slotLeft,
          slot: slot1.list1
        }}
        slotCenter={{
          layouts: slotCenter,
          slot: slot2.list1
        }}
        slotRight={{
          layouts: slotRight,
          slot: slot3.list1
        }}
      />
    )
  }
  return (
    <TemplateWrap
      template={type}
      slotItems={{
        layout: teasers.image_large_left,
        slot: slot1.list1
      }}
    />
  )
}

export default withTheme(PageBlock)