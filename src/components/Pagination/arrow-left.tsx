import { Block, Typography } from 'prensa'
import React from 'react'
import { PaginationNumberProps } from './types'

export const PaginationArrow = ({
  borderColor,
  radius
}: PaginationNumberProps) => {
  return (
    <Block
      align='column'
      alignx='center'
      aligny='middle'
      b='1px'
      borderColor={borderColor}
      mr={3}
      radius={radius}> 
    </Block>
  )
}
PaginationArrow.defaultProps = {
  borderColor: '#ADB0BC',
  radius: 'circle',
}