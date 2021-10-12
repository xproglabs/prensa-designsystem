import React from 'react'

import Block from '../Block'
import {
  isBackgroundTransparent,
  selectBgColorFromSlot
} from '../PageBlock/utils'
import RenderSlot from '../RenderSlot'
import { RenderSlotProps } from '../RenderSlot/types'
import { renderSpaceSlot } from '../RenderSlot/utils'

interface Props {
  slotLeft: RenderSlotProps;
  slotRight: RenderSlotProps;
}

const Template5050 = ({ slotLeft, slotRight }: Props) => {
  const slotLeft_bgColor = selectBgColorFromSlot(slotLeft)
  const slotRight_bgColor = selectBgColorFromSlot(slotRight)
  const slotLeft_isTransparent = isBackgroundTransparent(slotLeft_bgColor)
  const slotRight_isTransparent = isBackgroundTransparent(slotRight_bgColor)
  return (
    <Block
      align='row'
      alignx='center'
      aligny='top'
      px='0px'
      py='0px'
      lg={{
        align: 'row',
        alignx: 'between',
        aligny: 'top'
      }}
      width='100%'>
      <Block
        align='column'
        alignx='left'
        mb={2}
        width='100%'
        lg={{
          align: 'row',
          alignx: 'between',
          custom: 'flex-wrap: wrap;',
          mb: 3,
          px: '0px',
          width: 'calc(((100% - 72px) / 2) + 24px)'
        }}>
        {(renderSpaceSlot(slotLeft.spaceA))}
        <Block
          align='column'
          alignx='center'
          bgColor={slotLeft_bgColor}
          mb={slotLeft_isTransparent ? '0px' : 2}
          px={slotLeft_isTransparent ? '0px' : 2}
          pt={slotLeft_isTransparent ? '0px' : 2}
          width={slotLeft_isTransparent ? '100%' : 'calc(100% - 32px)'}
          lg={{
            align: 'row',
            alignx: 'between',
            custom: 'flex-wrap: wrap;',
            mb: slotLeft_isTransparent ? '0px' : 3,
            px: slotLeft_isTransparent ? '0px' : 3,
            pt: slotLeft_isTransparent ? '0px' : 3,
            width: slotLeft_isTransparent ? '100%' : 'calc(100% - 48px)'
          }}>
          <RenderSlot {...slotLeft} />
        </Block>
        {(renderSpaceSlot(slotLeft.spaceB))}
      </Block>
      <Block
        align='column'
        alignx='left'
        mb={2}
        width='100%'
        lg={{
          align: 'row',
          alignx: 'between',
          custom: 'flex-wrap: wrap;',
          mb: 3,
          px: '0px',
          width: 'calc(((100% - 72px) / 2) + 24px)'
        }}>
        {(renderSpaceSlot(slotRight.spaceA))}
        <Block
          align='column'
          alignx='center'
          bgColor={slotRight_bgColor}
          mb={slotRight_isTransparent ? '0px' : 2}
          px={slotRight_isTransparent ? '0px' : 2}
          pt={slotRight_isTransparent ? '0px' : 2}
          width={slotRight_isTransparent ? '100%' : 'calc(100% - 32px)'}
          lg={{
            align: 'row',
            alignx: 'between',
            custom: 'flex-wrap: wrap;',
            mb: slotRight_isTransparent ? '0px' : 3,
            px: slotRight_isTransparent ? '0px' : 3,
            pt: slotRight_isTransparent ? '0px' : 3,
            width: slotRight_isTransparent ? '100%' : 'calc(100% - 48px)'
          }}>
          <RenderSlot {...slotRight} />
        </Block>
        {(renderSpaceSlot(slotRight.spaceB))}
      </Block>
    </Block>
  )
}

export { Template5050 }