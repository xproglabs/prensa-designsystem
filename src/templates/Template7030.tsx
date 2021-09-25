import React from 'react'

import Block from '../components/Block'
import RenderSlot from '../components/RenderSlot'
import { RenderSlotProps } from '../components/RenderSlot/types'

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