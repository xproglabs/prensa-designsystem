import React from 'react'
import RenderSlot from '../components/RenderSlot'
import Block from '../components/Block'

const TemplateWrap = ({ slotItems }) => {
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