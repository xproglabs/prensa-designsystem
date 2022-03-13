import { get } from 'lodash'
import React from 'react'

import Block from '../../NewBlock'
import { isBackgroundTransparent, selectBgColorFromSlot } from '../../PageBlock/utils'
import RenderSlot from '../../RenderSlot'
import { renderSpaceSlot } from '../../RenderSlot/utils'
import { Template50Props } from './props'

const Template5050 = ({ slotAds, slotLeft, slotRight }: Template50Props) => {
  const slotLeft_bgColor = selectBgColorFromSlot(slotLeft)
  const slotRight_bgColor = selectBgColorFromSlot(slotRight)
  const slotLeft_isTransparent = isBackgroundTransparent(slotLeft_bgColor)
  const slotRight_isTransparent = isBackgroundTransparent(slotRight_bgColor)
  return (
    <>
      <Block
        align={['column', 'row']}
        alignx={['center', 'between']}
        aligny={['top', 'top']}
        width='100%'
      >
        <Block
          align={['column', 'row']}
          alignx={['left', 'between']}
          custom={['', 'flex-wrap: wrap;']}
          width={['100%', 'calc(((100% - 72px) / 2) + 24px)']}
        >
          {renderSpaceSlot(slotLeft.spaceA)}
          <Block
            align={['column', 'row']}
            alignx={['center', 'between']}
            bgColor={slotLeft_bgColor}
            custom={['', 'flex-wrap: wrap;']}
            mb={[
              slotLeft_isTransparent ? get(slotLeft, 'space_bottom_column[0]', '0px') : get(slotLeft, 'space_bottom_column_color[0]', 2),
              slotLeft_isTransparent ? get(slotLeft, 'space_bottom_column[1]', '0px') : get(slotLeft, 'space_bottom_column_color[1]', 3)
            ]}
            pt={[
              slotLeft_isTransparent ? '0px' : 2,
              slotLeft_isTransparent ? '0px' : 3
            ]}
            px={[
              2,
              slotLeft_isTransparent ? '0px' : 3
            ]}
            width={[
              'calc(100% - 32px)',
              slotLeft_isTransparent ? '100%' : 'calc(100% - 48px)'
            ]}
          >
            <RenderSlot {...slotLeft} />
          </Block>
          {renderSpaceSlot(slotLeft.spaceB)}
        </Block>
        <Block
          align={['column', 'row']}
          alignx={['left', 'between']}
          custom={['', 'flex-wrap: wrap;']}
          width={['100%', 'calc(((100% - 72px) / 2) + 24px)']}
        >
          {renderSpaceSlot(slotRight.spaceA)}
          <Block
            align={['column', 'row']}
            alignx={['center', 'between']}
            bgColor={slotRight_bgColor}
            custom={['', 'flex-wrap: wrap;']}
            mb={[
              slotRight_isTransparent ? get(slotRight, 'space_bottom_column[0]', '0px') : get(slotRight, 'space_bottom_column_color[0]', 2),
              slotRight_isTransparent ? get(slotRight, 'space_bottom_column[1]', '0px') : get(slotRight, 'space_bottom_column_color[1]', 3)
            ]}
            pt={[
              slotRight_isTransparent ? '0px' : 2,
              slotRight_isTransparent ? '0px' : 3
            ]}
            px={[
              2,
              slotRight_isTransparent ? '0px' : 3
            ]}
            width={[
              'calc(100% - 32px)',
              slotRight_isTransparent ? '100%' : 'calc(100% - 48px)'
            ]}
          >
            <RenderSlot {...slotRight} />
          </Block>
          {renderSpaceSlot(slotRight.spaceB)}
        </Block>
      </Block>
      {renderSpaceSlot(slotAds.spaceB)}
    </>
  )
}

export { Template5050 }