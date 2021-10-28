import React from 'react'

import Block from '../Block'
import {
  isBackgroundTransparent,
  selectBgColorFromSlot,
  selectMinHeightFromSlot
} from '../PageBlock/utils'
import RenderSlot from '../RenderSlot'
import { RenderSlotProps } from '../RenderSlot/types'
import { renderSpaceSlot } from '../RenderSlot/utils'

interface Props {
  slotAds: RenderSlotProps;
  slot70: RenderSlotProps;
  slot30: RenderSlotProps;
}

const Template7030 = ({
  slotAds,
  slot70,
  slot30
}: Props) => {
  const slot70_bgColor = selectBgColorFromSlot(slot70)
  const slot30_bgColor = selectBgColorFromSlot(slot30)
  const slot70_isTransparent = isBackgroundTransparent(slot70_bgColor)
  const slot30_isTransparent = isBackgroundTransparent(slot30_bgColor)
  const slot70_customHeight_mobile = selectMinHeightFromSlot(slot70.min_height?.[0])
  const slot70_customHeight_desktop = selectMinHeightFromSlot(slot70.min_height?.[1])
  const slot30_customHeight_mobile = selectMinHeightFromSlot(slot30.min_height?.[0])
  const slot30_customHeight_desktop = selectMinHeightFromSlot(slot30.min_height?.[1])
  return (
    <>
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
            custom={slot70_customHeight_mobile}
            mb={2}
            px={2}
            pt={slot70_isTransparent ? '0px' : 2}
            width='calc(100% - 32px)'
            lg={{
              align: 'row',
              alignx: 'between',
              custom: `flex-wrap: wrap; ${slot70_customHeight_desktop}`,
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
            custom={slot30_customHeight_mobile}
            mb={2}
            px={2}
            pt={slot30_isTransparent ? '0px' : 2}
            width='calc(100% - 32px)'
            lg={{
              custom: slot30_customHeight_desktop,
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
      {(renderSpaceSlot(slotAds.spaceB))}
    </>
  )
}

export { Template7030 }