import { Block, Typography } from 'prensa'
import React from 'react'

// TODO : Circle interface
export const Circle = ({
  borderColor,
  children,
  color,
  fontFamily,
  fontSize
}) => {
  return (
    <Block
      align='column'
      alignx='center'
      aligny='middle'
      b='1px'
      borderColor={borderColor}
      custom='border-radius: 100%'
      height='40px'
      width='40px'>
        <Typography
          color={color}
          fontFamily={fontFamily}
          fontSize={fontSize}>
          {children}
        </Typography>  
    </Block>
  )
}
Circle.defaultProps = {
  borderColor: 'primary1',
  color: 'primary1',
  fontFamily: 'primary',
  fontSize: '18px'
}