import React from 'react'

import Block from '../Block'
import RenderSlot from '../RenderSlot'
import { RenderSlotProps } from '../RenderSlot/types'

interface Template100Props {
  slot100: RenderSlotProps;
}

const Template100 = ({ slot100 }: Template100Props) => {
  return (
    <Block
      align='column'
      alignx='center'
      aligny='top'
      mb={2}
      lg={{
        align: 'row',
        alignx: 'between',
        aligny: 'top',
        mb: 3
      }}
      width='100%'>
      <RenderSlot {...slot100} />
    </Block>
  )
}

export { Template100 }