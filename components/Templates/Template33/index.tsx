import React from 'react'

import Block from '../../Block'
import { isBackgroundTransparent, selectBgColorFromSlot } from '../../PageBlock/utils'
import RenderSlot from '../../RenderSlot'
import { renderSpaceSlot } from '../../RenderSlot/utils'
import { Column, ColumnColor } from './styled'
import { Template33Props } from './types'

const Template33 = ({
  slotAds,
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
    <>
      <Block
        align={['column', 'row']}
        alignx={['center', 'between']}
        aligny={['top', 'top']}
        width='100%'
      >
        <Column>
          {renderSpaceSlot(slotAds.spaceTopLeft)}
          {renderSpaceSlot(slotLeft.spaceA)}
          <ColumnColor
            bgColor={slotLeft_bgColor}
            minHeight={slotLeft.min_height}
            slot={slotLeft}
            transparent={slotLeft_isTransparent}
          >
            <RenderSlot {...slotLeft} />
          </ColumnColor>
          {renderSpaceSlot(slotLeft.spaceB)}
        </Column>
        <Column>
          {renderSpaceSlot(slotAds.spaceTopCenter)}
          {renderSpaceSlot(slotCenter.spaceA)}
          <ColumnColor
            bgColor={slotCenter_bgColor}
            minHeight={slotCenter.min_height}
            slot={slotCenter}
            transparent={slotCenter_isTransparent}
          >
            <RenderSlot {...slotCenter} />
          </ColumnColor>
          {renderSpaceSlot(slotCenter.spaceB)}
        </Column>
        <Column>
          {renderSpaceSlot(slotAds.spaceTopRight)}
          {renderSpaceSlot(slotRight.spaceA)}
          <ColumnColor
            bgColor={slotRight_bgColor}
            minHeight={slotRight.min_height}
            slot={slotRight}
            transparent={slotRight_isTransparent}
          >
            <RenderSlot {...slotRight} />
          </ColumnColor>
          {renderSpaceSlot(slotRight.spaceB)}
        </Column>
      </Block>
      {renderSpaceSlot(slotAds.spaceB)}
    </>
  )
}

export { Template33 }