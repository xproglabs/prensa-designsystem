import { Block } from 'prensa'
import React from 'react'

// TODO : Circle interface
export const Circle = ({
  children,
  color
}) => {
  const custom = 'border-radius: 100%;'
  return (
    <Block
      align='column'
      bgColor={color}
      custom={custom}
      height='40px'
      width='100%'>
      {children}
    </Block>
  )
}