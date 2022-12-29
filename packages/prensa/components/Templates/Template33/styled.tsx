import get from 'lodash/get'
import { Block } from 'prensa'
import React from 'react'

import { selectMinHeightFromSlot } from '../../PageBlock/utils'
import { ColorizedColumnProps, ColumnProps } from './types'

export const Column = ({ children }: ColumnProps) => (
  <Block
    align='column'
    alignx='left'
    aligny='top'
    lg={{ width: 'calc((100% - 48px) / 3)' }}
    width='100%'
  >
    {children}
  </Block>
)

export const ColumnColor = ({
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
      custom={slot_customHeight_mobile}
      px={2}
      pt={transparent ? '0px' : 2}
      mb={transparent ?
        get(slot, 'space_bottom_column[0]', '0px') :
        get(slot, 'space_bottom_column_color[0]', 2)}
      width='calc(100% - 32px)'
      lg={{
        custom: slot_customHeight_desktop,
        px: transparent ? '0px' : 3,
        pt: transparent ? '0px' : 3,
        mb: transparent ?
          get(slot, 'space_bottom_column[1]', '0px') :
          get(slot, 'space_bottom_column_color[1]', 3),
        width: transparent ? '100%' : 'calc(100% - 48px)'
      }}
    >
      {children}
    </Block>
  )
}