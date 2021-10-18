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
  slot70: RenderSlotProps;
  slot30: RenderSlotProps;
}

const Template7030 = ({ slot70, slot30 }: Props) => {
  const slot70_bgColor = selectBgColorFromSlot(slot70)
  const slot30_bgColor = selectBgColorFromSlot(slot30)
  const slot70_isTransparent = isBackgroundTransparent(slot70_bgColor)
  const slot30_isTransparent = isBackgroundTransparent(slot30_bgColor)
  return (
    <Block
      align='column'
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
          mb: '0px',
          px: '0px',
          width: 'calc((((100% - 48px) / 3) * 2) + 24px)'
        }}>
        {(renderSpaceSlot(slot70.spaceA))}
        <Block
          align='column'
          alignx='center'
          bgColor={slot70_bgColor}
          mb={2}
          px={2}
          pt={slot70_isTransparent ? '0px' : 2}
          width='calc(100% - 32px)'
          lg={{
            align: 'row',
            alignx: 'between',
            custom: 'flex-wrap: wrap;',
            mb: slot70_isTransparent ? '0px' : 3,
            px: slot70_isTransparent ? '0px' : 3,
            pt: slot70_isTransparent ? '0px' : 3,
            width: slot70_isTransparent ? '100%' : 'calc(100% - 48px)'
          }}>
          <RenderSlot {...slot70} />
        </Block>
        {(renderSpaceSlot(slot70.spaceB))}
      </Block>
      <Block
        align='column'
        alignx='left'
        mb={2}
        width='100%'
        lg={{
          px: '0px',
          width: 'calc((100% - 48px) / 3)'
        }}>
        {(renderSpaceSlot(slot30.spaceA))}
        <Block
          align='column'
          alignx='center'
          aligny='top'
          bgColor={slot30_bgColor}
          mb={2}
          px={2}
          pt={slot30_isTransparent ? '0px' : 2}
          width='calc(100% - 32px)'
          lg={{
            mb: slot30_isTransparent ? '0px' : 3,
            px: slot30_isTransparent ? '0px' : 3,
            pt: slot30_isTransparent ? '0px' : 3,
            width: slot30_isTransparent ? '100%' : 'calc(100% - 48px)'
          }}>
          <RenderSlot {...slot30} />
        </Block>
        {(renderSpaceSlot(slot30.spaceB))}
      </Block>
    </Block>
  )
}

export { Template7030 }