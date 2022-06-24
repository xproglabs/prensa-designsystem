import get from 'lodash/get'
import React from 'react'

import Block from '../../Block'
import { isBackgroundTransparent, selectBgColorFromSlot } from '../../PageBlock/utils'
import { selectMinHeightFromSlot } from '../../PageBlock/utils'
import RenderSlot from '../../RenderSlot'
import { renderSpaceSlot } from '../../RenderSlot/utils'
import { Template100Props } from './types'

const Template100 = ({ slotAds, slot100 }: Template100Props) => {
  const slot100_bgColor = selectBgColorFromSlot(slot100)
  const slot100_isTransparent = isBackgroundTransparent(slot100_bgColor)
  const slot_customHeight_mobile = `${selectMinHeightFromSlot(slot100?.min_height?.[0])}`
  const slot_customHeight_desktop = `${selectMinHeightFromSlot(slot100?.min_height?.[1])}`
  return (
    <>
      <Block
        align='row'
        alignx='center'
        aligny='top'
        width='100%'
      >
        <Block
          align='column'
          alignx='left'
          aligny='top'
          width='100%'
        >
          {renderSpaceSlot(slotAds.spaceTopLeft)}
          {renderSpaceSlot(slot100.spaceA)}
          <Block
            align={['column', 'row']}
            alignx={['left', 'between']}
            aligny={['top', 'top']}
            bgColor={slot100_bgColor}
            custom={[
              slot_customHeight_mobile,
              `flex-wrap: wrap; ${slot_customHeight_desktop}`
            ]}
            mb={[
              slot100_isTransparent ? get(slot100, 'space_bottom_column[0]', '0px') : get(slot100, 'space_bottom_column_color[0]', 2),
              slot100_isTransparent ? get(slot100, 'space_bottom_column[1]', '0px') : get(slot100, 'space_bottom_column_color[1]', 3)
            ]}
            pt={[
              slot100_isTransparent ? '0px' : 2,
              slot100_isTransparent ? '0px' : 3
            ]}
            px={[
              2,
              slot100_isTransparent ? '0px' : 3
            ]}
            width={[
              'calc(100% - 32px)',
              slot100_isTransparent ? '100%' : 'calc(100% - 48px)'
            ]}
          >
            <RenderSlot {...slot100} />
          </Block>
          {renderSpaceSlot(slot100.spaceB)}
        </Block>
      </Block>
      {renderSpaceSlot(slotAds.spaceB)}
    </>
  )
}

export { Template100 }