import React from 'react'

import Block from '../Block'
import RenderSlot from '../RenderSlot'
import { RenderSlotProps } from '../RenderSlot/types'

interface Props {
  slot70: RenderSlotProps;
  slot30: RenderSlotProps;
}

const Template7030 = ({ slot70, slot30 }: Props) => {
  return (
    <Block
      align="column"
      alignx="center"
      aligny="top"
      lg={{
        align: 'row',
        alignx: 'between',
        aligny: 'top'
      }}
      width="100%">
      <Block
        align="column"
        alignx="center"
        lg={{
          align: 'row',
          alignx: 'between',
          width: 'calc(calc(calc(100% - 8px) / 3) * 2)'
        }}
        width="100%">
        <RenderSlot {...slot70} />
      </Block>
      <Block
        align="column"
        alignx="center"
        aligny="top"
        lg={{
          width: 'calc(calc(100% - 32px) / 3)'
        }}
        width="100%">
        <RenderSlot {...slot30} />
      </Block>
    </Block>
  )
}

export { Template7030 }