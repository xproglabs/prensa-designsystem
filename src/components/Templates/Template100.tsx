import React from 'react'

import Block from '../Block'
import {
  isBackgroundTransparent,
  selectBgColorFromSlot
} from '../PageBlock/utils'
import RenderSlot from '../RenderSlot'
import { RenderSlotProps } from '../RenderSlot/types'
import { renderSpaceSlot } from '../RenderSlot/utils'

interface ColumnProps {
  children: any;
}
interface ColumnColorProps {
  bgColor: string;
  children: any;
  transparent: boolean;
}
interface Template100Props {
  slot100: RenderSlotProps;
}
const Column = ({ children }: ColumnProps) => (
  <Block
    align="column"
    alignx="left"
    aligny="top"
    mb={2}
    width="100%"
    lg={{
      mb: 0
    }}>
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
      align="column"
      alignx="left"
      aligny="top"
      bgColor={bgColor}
      mb={transparent ? '0px' : 2}
      pt={transparent ? '0px' : 2}
      px={2}
      width='calc(100% - 32px)'
      lg={{
        align: 'row',
        alignx: 'between',
        aligny: 'top',
        mb: transparent ? '0px' : 3,
        pt: transparent ? '0px' : 3,
        px: transparent ? '0px' : 3,
        width: transparent ? '100%' : 'calc(100% - 48px)'
      }}>
      {children}
    </Block>
  )
}
const Template100 = ({
  slot100,
}: Template100Props) => {
  const slot100_bgColor = selectBgColorFromSlot(slot100)
  const slot100_isTransparent = isBackgroundTransparent(slot100_bgColor)
  return (
    <Block
      align="row"
      alignx="center"
      aligny="top"
      mb={2}
      width="100%">
      <Column>
        {(renderSpaceSlot(slot100.spaceA))}
        <ColumnColor
          bgColor={slot100_bgColor}
          transparent={slot100_isTransparent}>
          <RenderSlot {...slot100} />
        </ColumnColor>
        {(renderSpaceSlot(slot100.spaceB))}
      </Column>
    </Block>
  )
}

export { Template100 }