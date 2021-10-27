import { Block, Typography } from 'prensa'
import React from 'react'
import { PaginationNumberProps } from './types'

import { IcRightPagination } from '../../icons/IcRightPagination'

export const ArrowRight = ({
  borderColor,
  height,
  radius,
  width
}: PaginationNumberProps) => {
  return (
    <Block
      align='column'
      alignx='center'
      aligny='middle'
      b='1px'
      borderColor={borderColor}
      radius={radius}
      height={height}
      width={width}> 
      <IcRightPagination />
    </Block>
  )
}
ArrowRight.defaultProps = {
  borderColor: '#ADB0BC',
  height: '40px',
  radius: 'circle',
  width: '40px'
}