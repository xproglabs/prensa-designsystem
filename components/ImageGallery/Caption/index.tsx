import { Block, Typography } from 'prensa'
import React from 'react'

import { CaptionProps } from './types'

const Caption = ({
  children,
  fontSize,
  fontFamily,
  lineHeight
}: CaptionProps) => {
  return (
    <Block
      bgColor='neutral9'
      px={3}
      py={3}
      width='100%'
      lg={{
        px: 4,
        py: 2
      }}
    >
      <Typography
        color='neutral4'
        element='p'
        fontFamily={fontFamily}
        fontSize={fontSize[0]}
        lineHeight={lineHeight[0]}
        lg={{
          fontSize: fontSize[1],
          lineHeight: lineHeight[1]
        }}
      >
        {children}
      </Typography>
    </Block>
  )
}

Caption.defaultProps = {
  fontSize: ['14px', '16px'],
  fontFamily: 'primary',
  lineHeight: ['100%', '100%']
}

export { Caption }