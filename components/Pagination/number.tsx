import { Block, Typography } from 'prensa'
import React from 'react'

import { NumberProps } from './types'

export const PaginationNumber = ({
  bgColor,
  borderColor,
  children,
  color,
  fontFamily,
  fontSize,
  height,
  href,
  radius,
  width
}: NumberProps) => {
  const AreaStyled = ({ children }) => {
    if (href) {
      return (
        <a
          aria-label={`Página ${children}`}
          href={href}>
          {children}
        </a>
      )
    }
    return children
  }
  return (
    <AreaStyled>
      <Block
        align='column'
        alignx='center'
        aligny='middle'
        b='1px'
        bgColor={bgColor}
        borderColor={borderColor}
        height={height}
        mb={1}
        mr={1.5}
        radius={radius}
        width={width}>
        <Typography
          color={color}
          fontFamily={fontFamily}
          fontSize={fontSize}>
          {children}
        </Typography>  
      </Block>
    </AreaStyled>
  )
}

PaginationNumber.defaultProps = {
  bgColor: 'transparent',
  borderColor: 'neutral5',
  color: 'neutral5',
  fontFamily: 'primary',
  fontSize: '18px',
  height: '40px',
  radius: 'circle',
  width: '40px'
}