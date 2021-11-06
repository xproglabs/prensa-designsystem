import { Block } from 'prensa'
import React from 'react'

import { IcLeftPagination } from '../../icons/IcLeftPagination'
import { IcRightPagination } from '../../icons/IcRightPagination'
import { ArrowProps } from './types'

export const ArrowButton = ({
  borderColor,
  direction,
  height,
  radius,
  width
}: ArrowProps) => {
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
      {direction == 'left' && (
        <IcLeftPagination />
      )}
      {direction == 'right' && (
        <IcRightPagination />
      )}
    </Block>
  )
}
ArrowButton.defaultProps = {
  borderColor: '#ADB0BC',
  direction: 'right',
  height: '40px',
  radius: 'circle',
  width: '40px'
}