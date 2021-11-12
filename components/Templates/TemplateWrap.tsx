import { Block } from 'prensa'
import React from 'react'

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
    <React.Fragment>
      <Block
        align='column'
        alignx='left'
        aligny='top'
        width='100%'
      >
        {renderSpaceSlot(slotItems.spaceA)}
        <Block
          width='100%'
          lg={{
            align: 'row',
            alignx: 'between',
            aligny: 'top',
            custom: 'flex-wrap: wrap;'
          }}
        >
          <RenderSlot {...slotItems} />
        </Block>
        {renderSpaceSlot(slotItems.spaceB)}
      </Block>
      {renderSpaceSlot(slotAds.spaceB)}
    </React.Fragment>
  )
}

export { TemplateWrap }