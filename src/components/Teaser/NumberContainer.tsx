import { Block, Typography } from 'prensa'
import React from 'react'

export const NumberContainer = ({
  borderColor,
  children,
  color,
  fontFamily,
  fontSize,
  height,
  numberContainer,
  radius,
  width
}) => {
  return (
    <Block
      align='column'
      alignx='center'
      aligny='middle'
      borderColor={borderColor}
      height={height}
      radius={radius}
      width={width}
      {...numberContainer}>
        <Typography
          color={color}
          fontFamily={fontFamily}
          fontSize={fontSize}>
          {children}
        </Typography>  
    </Block>
  )
}
NumberContainer.defaultProps = {
  borderColor: 'primary1',
  color: 'primary1',
  fontFamily: 'primary',
  fontSize: '18px',
  height: '40px',
  radius: 'circle',
  width: '40px'
}