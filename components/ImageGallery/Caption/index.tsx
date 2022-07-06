import React from 'react'

import Block from '../../Block'
import Typography from '../../Typography'
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
      px={[1, 2]}
      width={[mobileWidth, desktopWidth]}
    >
      <Typography
        color='neutral4'
        element='p'
        fontFamily={fontFamily}
        fontSize={fontSize}
        lineHeight={lineHeight}
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