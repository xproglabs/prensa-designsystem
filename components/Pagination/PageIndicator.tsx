import { Block, Link, Typography } from 'prensa'
import React from 'react'

import { NumberProps } from './types'

const PageIndicator = ({
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

  const Indicator = () => (
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
      width={width}
    >
      <Typography
        color={color}
        fontFamily={fontFamily}
        fontSize={fontSize}
      >
        {children}
      </Typography>
    </Block>
  )

  if (href) {
    return (
      <Link aria-label={`Página ${children}`} href={href}>
        <Indicator />
      </Link>
    )
  }

  return <Indicator />
}

PageIndicator.defaultProps = {
  bgColor: 'transparent',
  borderColor: 'neutral5',
  color: 'neutral5',
  fontFamily: 'primary',
  fontSize: '18px',
  height: '40px',
  radius: 'circle',
  width: '40px'
}

export { PageIndicator }
