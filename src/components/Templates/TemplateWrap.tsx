import React from 'react'

import Block from '../Block'
import RenderSlot from '../RenderSlot'
import { RenderSlotProps } from '../RenderSlot/types'
import { renderSpaceSlot } from '../RenderSlot/utils'

interface TemplateWrapProps {
  slotAds: RenderSlotProps;
  slotItems: RenderSlotProps;
}

const TemplateWrap = ({
  slotAds,
  slotItems
}: TemplateWrapProps) => {
  return (
    <>
      <Block
        align="column"
        alignx="left"
        aligny="top"
        lg={{
          align: 'row',
          alignx: 'between',
          aligny: 'top',
          custom: 'flex-wrap: wrap;'
        }}
        width="100%">
        {(renderSpaceSlot(slotItems.spaceA))}
        <RenderSlot {...slotItems} />
        {(renderSpaceSlot(slotItems.spaceB))}
      </Block>
      {(renderSpaceSlot(slotAds.spaceB))}
    </>
  )
}

export { TemplateWrap }