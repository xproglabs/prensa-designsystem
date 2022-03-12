import { get } from 'lodash'
import React from 'react'

import Block from '../../NewBlock'
import { isBackgroundTransparent, selectBgColorFromSlot, selectMinHeightFromSlot } from '../../PageBlock/utils'
import RenderSlot from '../../RenderSlot'
import { renderSpaceSlot } from '../../RenderSlot/utils'
import { Template7030Props } from './types'

const Template7030 = ({ slotAds, slot70, slot30 }: Template7030Props) => {

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
        align={['column', 'row']}
        alignx={['center', 'between']}
        aligny={['top', 'top']}
        width='100%'
        bgColor='primary1'
      >
        <Block
          align={['column', 'row']}
          alignx={['left', 'between']}
          custom={['', 'flex-wrap:wrap;']}
          width={['100%', 'calc((((100% - 48px) / 3) * 2) + 24px)']}
        >
          {renderSpaceSlot(slotAds.spaceTopLeft)}
          {renderSpaceSlot(slot70.spaceA)}
          <Block
            align={['column', 'row']}
            alignx={['center', 'between']}
            bgColor={slot70_bgColor}
            custom={[
              slot70_customHeight_mobile,
              `flex-wrap: wrap; ${slot70_customHeight_desktop}`
            ]}
            px={[
              2,
              slot70_isTransparent ? '0px' : 3
            ]}
            pt={[
              slot70_isTransparent ? '0px' : 2,
              slot70_isTransparent ? '0px' : 3
            ]}
            mb={[
              slot70_isTransparent ? get(slot70, 'space_bottom_column[0]', '0px') : get(slot70, 'space_bottom_column_color[0]', 2),
              slot70_isTransparent ? get(slot70, 'space_bottom_column[1]', '0px') : get(slot70, 'space_bottom_column_color[1]', 3)
            ]}
            width={[
              'calc(100% - 32px)',
              slot70_isTransparent ? '100%' : 'calc(100% - 48px)'
            ]}
          >
            <RenderSlot {...slot70} />
          </Block>
          {renderSpaceSlot(slot70.spaceB)}
        </Block>
        <Block
          align='column'
          alignx='left'
          width={['100%', 'calc((100% - 48px) / 3)']}
        >
          {renderSpaceSlot(slotAds.spaceTopCenter)}
          {renderSpaceSlot(slot30.spaceA)}
          <Block
            align='column'
            alignx='center'
            aligny='top'
            bgColor={slot30_bgColor}
            custom={[slot30_customHeight_mobile, slot30_customHeight_desktop]}
            px={[2, slot30_isTransparent ? '0px' : 3]}
            pt={[slot30_isTransparent ? '0px' : 2, slot30_isTransparent ? '0px' : 3]}
            mb={[
              slot30_isTransparent ? get(slot30, 'space_bottom_column[0]', '0px') : get(slot30, 'space_bottom_column_color[0]', 2),
              slot30_isTransparent ? get(slot30, 'space_bottom_column[1]', '0px') : get(slot30, 'space_bottom_column_color[1]', 3)
            ]}
            width={[
              'calc(100% - 32px)',
              slot30_isTransparent ? '100%' : 'calc(100% - 48px)'
            ]}
          >
            <RenderSlot {...slot30} />
          </Block>
          {renderSpaceSlot(slot30.spaceB)}
        </Block>
      </Block>
      {renderSpaceSlot(slotAds.spaceB)}
    </>
  )
}

export { Template7030 }