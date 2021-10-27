import { Block, Typography } from 'prensa'
import React from 'react'
import { PaginationNumberProps } from './types'

import { IcLeftPagination } from '../../icons/IcLeftPagination'

export const ArrowLeft = ({
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
      height={height}
      radius={radius}
      width={width}> 
      <IcLeftPagination />
    </Block>
  )
}
ArrowLeft.defaultProps = {
  borderColor: '#ADB0BC',
  height: '40px',
  radius: 'circle',
  width: '40px'
}