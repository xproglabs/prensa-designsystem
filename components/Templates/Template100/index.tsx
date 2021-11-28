import { Block } from 'prensa'
import React from 'react'

import {
  isBackgroundTransparent,
  selectBgColorFromSlot,
  selectMinHeightFromSlot
} from '../../PageBlock/utils'
import RenderSlot from '../../RenderSlot'
import { renderSpaceSlot } from '../../RenderSlot/utils'
import { ColorizedColumnProps, ColumnProps, Template100Props } from './types'


const Column = ({ children }: ColumnProps) => (
  <Block
    align="column"
    alignx="left"
    aligny="top"
    mb={2}
    width="100%"
    lg={{ mb: 0 }}
  >
    {children}
  </Block>
)

const ColorizedColumn = ({ bgColor, children, minHeight, transparent }: ColorizedColumnProps) => {
  const slot_customHeight_mobile = `${selectMinHeightFromSlot(minHeight?.[0])}`
  const slot_customHeight_desktop = `${selectMinHeightFromSlot(minHeight?.[1])}`
  return (
    <Block
      align="column"
      alignx="left"
      aligny="top"
      bgColor={bgColor}
      custom={slot_customHeight_mobile}
      mb={transparent ? '0px' : 2}
      pt={transparent ? '0px' : 2}
      px={2}
      width='calc(100% - 32px)'
      lg={{
        align: 'row',
        alignx: 'between',
        aligny: 'top',
        custom: `flex-wrap: wrap; ${slot_customHeight_desktop}`,
        mb: transparent ? '0px' : 3,
        pt: transparent ? '0px' : 3,
        px: transparent ? '0px' : 3,
        width: transparent ? '100%' : 'calc(100% - 48px)'
      }}
    >
      {children}
    </Block>
  )
}

const Template100 = ({ slotAds, slot100 }: Template100Props) => {
  const slot100_bgColor = selectBgColorFromSlot(slot100)
  const slot100_isTransparent = isBackgroundTransparent(slot100_bgColor)
  return (
    <React.Fragment>
      <Block
        align="row"
        alignx="center"
        aligny="top"
        mb={2}
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