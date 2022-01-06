import { Block } from 'prensa'
import React from 'react'

import { isBackgroundTransparent, selectBgColorFromSlot } from '../../PageBlock/utils'
import RenderSlot from '../../RenderSlot'
import { renderSpaceSlot } from '../../RenderSlot/utils'
import { ColorizedColumn, Column } from './styled'
import { Template100Props } from './types'

const Template100 = ({ slotAds, slot100 }: Template100Props) => {
  const slot100_bgColor = selectBgColorFromSlot(slot100)
  const slot100_isTransparent = isBackgroundTransparent(slot100_bgColor)
  return (
    <React.Fragment>
      <Block
        align="row"
        alignx="center"
        aligny="top"
        width="100%"
      >
        <Column>
          {renderSpaceSlot(slot100.spaceA)}
          <ColorizedColumn
            bgColor={slot100_bgColor}
            minHeight={slot100.min_height}
            transparent={slot100_isTransparent}
          >
            <RenderSlot {...slot100} />
          </ColorizedColumn>
          {renderSpaceSlot(slot100.spaceB)}
        </Column>
      </Block>
      {renderSpaceSlot(slotAds.spaceB)}
    </React.Fragment>
  )
}

export { Template100 }