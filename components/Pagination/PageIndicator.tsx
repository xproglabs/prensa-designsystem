import { Block, Link, Typography } from 'prensa'
import React from 'react'

import { IndicatorProps } from './types'

const PageIndicator = ({
  bgColor,
  borderColor,
  children,
  color,
  fontFamily,
  fontSize,
  height,
  href,
  mt,
  mr,
  mb,
  ml,
  radius,
  width
}: IndicatorProps) => {

  const Indicator = () => (
    <Block
      align='column'
      alignx='center'
      aligny='middle'
      b='1px'
      bgColor={bgColor}
      borderColor={borderColor}
      height={height}
      mt={href ? undefined : mt}
      mr={href ? undefined : mr}
      mb={href ? undefined : mb}
      ml={href ? undefined : ml}
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
      <Link
        aria-label={`Página ${children}`}
        href={href}
        mt={mt}
        mr={mr}
        mb={mb}
        ml={ml}
      >
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
  mr: 1.5,
  radius: 'circle',
  width: '40px'
}

export { PageIndicator }
