import React from 'react'

import Block from '../components/Block'
import RenderSlot from '../components/RenderSlot'
import { RenderSlotProps } from '../components/RenderSlot/types'

type SlotProps = RenderSlotProps & {
  section_title?: () => void;
}
interface Template33Props {
  slotLeft: SlotProps;
  slotCenter: SlotProps;
  slotRight: SlotProps;
}
const Column = ({ children }) => (
  <Block
    align="column"
    alignx="left"
    aligny="top"
    mb={2}
    lg={{
      mb: 0,
      width: 'calc(calc(100% - 32px) / 3)'
    }}
    width="100%">
    {children}
  </Block>
)
const Template33 = ({
  slotLeft,
  slotCenter,
  slotRight
}: Template33Props) => {
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
      <Column>
        {slotLeft.section_title}
        <RenderSlot {...slotLeft} />
      </Column>
      <Column>
        {slotCenter.section_title}
        <RenderSlot {...slotCenter} />
      </Column>
      <Column>
        {slotRight.section_title}
        <RenderSlot {...slotRight} />
      </Column>
    </Block>
  )
}

export { Template33 }