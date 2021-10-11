import React from 'react'

import Block from '../Block'
import {
  isBackgroundTransparent,
  selectBgColorFromSlot
} from '../PageBlock/utils'
import RenderSlot from '../RenderSlot'
import { RenderSlotProps } from '../RenderSlot/types'
import { renderSpaceSlot } from '../RenderSlot/utils'

type SlotProps = RenderSlotProps & {
  section_title?: () => void;
}

interface ColumnProps {
  bgColor: string;
  children: any;
}
interface Template33Props {
  slotLeft: SlotProps;
  slotCenter: SlotProps;
  slotRight: SlotProps;
}
const Column = ({ bgColor, children }: ColumnProps) => (
  <Block
    align="column"
    alignx="left"
    aligny="top"
    bgColor={bgColor}
    mb={2}
    lg={{
      mb: 0,
      width: 'calc((100% - 48px) / 3)'
    }}
    width="100%">
    {children}
  </Block>
)

interface ColumnColorProps {
  children: any;
  transparent: boolean;
}
const ColumnColor = ({
  children,
  transparent
}: ColumnColorProps) => {
  return (
    <Block
      pt={transparent ? '0px' : 2}
      px={transparent ? '0px' : 2}
      width='100%'
      lg={{
        pt: transparent ? '0px' : 3,
        px: transparent ? '0px' : 3,
        width: transparent ? '100%' : 'calc(100% - 48px)'
      }}>
      {children}
    </Block>
  )
}

const Template33 = ({
  slotLeft,
  slotCenter,
  slotRight
}: Template33Props) => {
  const slotLeft_bgColor = selectBgColorFromSlot(slotLeft)
  const slotCenter_bgColor = selectBgColorFromSlot(slotCenter)
  const slotRight_bgColor = selectBgColorFromSlot(slotRight)
  const slotLeft_isTransparent = isBackgroundTransparent(slotLeft_bgColor)
  const slotCenter_isTransparent = isBackgroundTransparent(slotCenter_bgColor)
  const slotRight_isTransparent = isBackgroundTransparent(slotRight_bgColor)
  return (
    <Block
      align="column"
      alignx="center"
      aligny="top"
      mb={2}
      lg={{
        align: 'row',
        alignx: 'between',
        aligny: 'top',
        mb: 3
      }}
      width="100%">
      <Column
        bgColor={slotLeft_bgColor}>
        {(renderSpaceSlot(slotLeft.spaceA))}
        <ColumnColor
          transparent={slotLeft_isTransparent}>
          {slotLeft.section_title}
          <RenderSlot {...slotLeft} />
        </ColumnColor>
      </Column>
      <Column
        bgColor={slotCenter_bgColor}>
        <ColumnColor
          transparent={slotCenter_isTransparent}>
          {slotCenter.section_title}
          <RenderSlot {...slotCenter} />
        </ColumnColor>
      </Column>
      <Column
        bgColor={slotRight_bgColor}>
        <ColumnColor
          transparent={slotRight_isTransparent}>
          {slotRight.section_title}
          <RenderSlot {...slotRight} />
        </ColumnColor>
      </Column>
    </Block>
  )
}

export { Template33 }