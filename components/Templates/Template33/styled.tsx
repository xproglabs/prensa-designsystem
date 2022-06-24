import { get } from 'lodash'
import React from 'react'

import Block from '../../Block'
import { selectMinHeightFromSlot } from '../../PageBlock/utils'
import { ColorizedColumnProps, ColumnProps } from './types'

const Column = ({ children }: ColumnProps) => (
  <Block
    align='column'
    alignx='left'
    aligny='top'
    width={['100%', 'calc((100% - 48px) / 3)']}
  >
    {children}
  </Block>
)

const ColumnColor = ({
  bgColor,
  children,
  minHeight,
  transparent,
  slot
}: ColorizedColumnProps) => {
  const slot_customHeight_mobile = selectMinHeightFromSlot(minHeight?.[0])
  const slot_customHeight_desktop = selectMinHeightFromSlot(minHeight?.[1])
  return (
    <Block
      bgColor={bgColor}
      custom={[
        slot_customHeight_mobile,
        slot_customHeight_desktop
      ]}
      mb={[
        transparent ? get(slot, 'space_bottom_column[0]', '0px') : get(slot, 'space_bottom_column_color[0]', 2),
        transparent ? get(slot, 'space_bottom_column[1]', '0px') : get(slot, 'space_bottom_column_color[1]', 3)
      ]}
      px={[
        2,
        transparent ? '0px' : 3
      ]}
      pt={[
        transparent ? '0px' : 2,
        transparent ? '0px' : 3
      ]}
      width={[
        'calc(100% - 32px)',
        transparent ? '100%' : 'calc(100% - 48px)'
      ]}
    >
      {children}
    </Block>
  )
}

export { Column, ColumnColor }