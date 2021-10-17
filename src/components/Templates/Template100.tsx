import React from 'react'

import Block from '../Block'
import RenderSlot from '../RenderSlot'
import { RenderSlotProps } from '../RenderSlot/types'
import { renderSpaceSlot } from '../RenderSlot/utils'

interface Template100Props {
  slot100: RenderSlotProps;
}

const Template100 = ({ slot100 }: Template100Props) => {
  return (
    <Block
      align='column'
      alignx='left'
      aligny='top'
      mb={2}
      lg={{
        mb: 3
      }}
      width='100%'>
      {(renderSpaceSlot(slot100.spaceA))}
      <RenderSlot {...slot100} />
      {(renderSpaceSlot(slot100.spaceB))}
    </Block>
  )
}

export { Template100 }