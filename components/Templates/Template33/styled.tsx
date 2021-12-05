import { Block } from 'prensa'
import React from 'react'

import { selectMinHeightFromSlot } from '../../PageBlock/utils'
import { ColorizedColumnProps, ColumnProps } from './types'

export const Column = ({ children }: ColumnProps) => (
  <Block
    align='column'
    alignx='left'
    aligny='top'
    mb={2}
    lg={{ mb: 3, width: 'calc((100% - 48px) / 3)' }}
    width='100%'
  >
    {children}
  </Block>
)

export const ColumnColor = ({ bgColor, children, minHeight, transparent }: ColorizedColumnProps) => {
  const slot_customHeight_mobile = selectMinHeightFromSlot(minHeight?.[0])
  const slot_customHeight_desktop = selectMinHeightFromSlot(minHeight?.[1])
  return (
    <Block
      bgColor={bgColor}
      custom={slot_customHeight_mobile}
      px={2}
      pt={transparent ? '0px' : 2}
      width='calc(100% - 32px)'
      lg={{
        custom: slot_customHeight_desktop,
        px: transparent ? '0px' : 3,
        pt: transparent ? '0px' : 3,
        width: transparent ? '100%' : 'calc(100% - 48px)'
      }}
    >
      {children}
    </Block>
  )
}