import { Block, Typography } from 'prensa'
import React from 'react'

// TODO : Circle interface
export const Circle = ({
  borderColor,
  children,
  color,
  fontFamily,
  fontSize,
  height,
  pt,
  pr,
  pb,
  pl,
  mt,
  mr,
  mb,
  ml,
  radius,
  width
}) => {
  return (
    <Block
      align='column'
      alignx='center'
      aligny='middle'
      b='1px'
      borderColor={borderColor}
      height={height}
      pt={pt}
      pr={pr}
      pb={pb}
      pl={pl}
      mt={mt}
      mr={mr}
      mb={mb}
      ml={ml}
      radius={radius}
      width={width}>
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
  fontSize: '18px',
  height: '40px',
  radius: 'circle',
  width: '40px'
}