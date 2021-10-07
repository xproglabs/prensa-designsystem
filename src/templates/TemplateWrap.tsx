import React from 'react'
import RenderSlot, {RenderSlotProps} from '../components/RenderSlot'
import Block from '../components/Block'

interface TemplateWrapProps {
  slotItems: RenderSlotProps;
}

const TemplateWrap = ({ slotItems }: TemplateWrapProps) => {
  return (
    <Block
      align="column"
      alignx="center"
      aligny="top"
      lg={{
        align: 'row',
        alignx: 'between',
        aligny: 'top',
        custom: 'flex-wrap: wrap;'
      }}
      width="100%"
    >
      <RenderSlot {...slotItems} />
    </Block>
  )
}

export {TemplateWrap}