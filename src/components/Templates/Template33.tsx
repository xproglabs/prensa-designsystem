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
  children: any;
}
interface ColumnColorProps {
  bgColor: string;
  children: any;
  transparent: boolean;
}
interface Template33Props {
  slotLeft: SlotProps;
  slotCenter: SlotProps;
  slotRight: SlotProps;
}
const Column = ({ children }: ColumnProps) => (
  <Block
    align="column"
    alignx="left"
    aligny="top"
    mb={2}
    lg={{
      mb: 3,
      width: 'calc((100% - 48px) / 3)'
    }}
    width="100%">
    {children}
  </Block>
)
const ColumnColor = ({
  bgColor,
  children,
  transparent
}: ColumnColorProps) => {
  return (
    <Block
      bgColor={bgColor}
      px={2}
      pt={transparent ? '0px' : 2}
      width='calc(100% - 32px)'
      lg={{
        px: 3,
        pt: transparent ? '0px' : 3,
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
      lg={{
        align: 'row',
        alignx: 'between',
        aligny: 'top',
        mb: 3
      }}
      width="100%">
      <Column>
        {(renderSpaceSlot(slotLeft.spaceA))}
        <ColumnColor
          bgColor={slotLeft_bgColor}
          transparent={slotLeft_isTransparent}>
          <RenderSlot {...slotLeft} />
        </ColumnColor>
        {(renderSpaceSlot(slotLeft.spaceB))}
      </Column>
      <Column>
        {(renderSpaceSlot(slotCenter.spaceA))}
        <ColumnColor
          bgColor={slotCenter_bgColor}
          transparent={slotCenter_isTransparent}>
          <RenderSlot {...slotCenter} />
        </ColumnColor>
        {(renderSpaceSlot(slotCenter.spaceB))}
      </Column>
      <Column>
        {(renderSpaceSlot(slotRight.spaceA))}
        <ColumnColor
          bgColor={slotRight_bgColor}
          transparent={slotRight_isTransparent}>
          <RenderSlot {...slotRight} />
        </ColumnColor>
        {(renderSpaceSlot(slotRight.spaceB))}
      </Column>
    </Block>
  )
}

export { Template33 }