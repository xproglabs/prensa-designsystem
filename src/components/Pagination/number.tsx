import { Block, Typography } from 'prensa'
import React from 'react'
import { PaginationNumberProps } from './types'

export const PaginationNumber = ({
  borderColor,
  color,
  fontFamily,
  fontSize,
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
      mr={3}
      radius={radius}
      width={width}>
        <Typography
          color={color}
          fontFamily={fontFamily}
          fontSize={fontSize}>
          1
        </Typography>  
    </Block>
  )
}
PaginationNumber.defaultProps = {
  borderColor: '#ADB0BC',
  color: '#ADB0BC',
  fontFamily: 'primary',
  fontSize: '18px',
  height: '40px',
  radius: 'circle',
  width: '40px'
}