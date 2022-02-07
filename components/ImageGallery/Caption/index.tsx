import { Block, Typography } from 'prensa'
import React from 'react'

import { CaptionComponentProps } from './types'

const Caption = ({
  amp,
  children,
  fontSize,
  fontFamily,
  height,
  lineHeight
}: CaptionComponentProps) => {

  const mobileWidth = amp ? 'calc(100% - 16px)' : '100%'
  const desktopWidth = amp ? 'calc(100% - 32px)' : '100%'

  return (
    <Block
      align='row'
      alignx='left'
      aligny='middle'
      bgColor='neutral9'
      height={height}
      px={1}
      width={mobileWidth}
      lg={{
        px: 2,
        width: desktopWidth
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