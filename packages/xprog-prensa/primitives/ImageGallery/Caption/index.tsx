import React from 'react'

import { Block } from '../../Block'
import { Typography } from '../../Typography'
import { CaptionComponentProps } from './types'

const Caption = ({
  children,
}: CaptionComponentProps) => {
  return (
    <Block
      css={{
        align: ['row', 'left', 'middle'],
        pt: '$2',
        px: '$2',
        width: '100%',
        '@lg': {
          pt: '$2',
          px: '$2',
          width: '100%',
        }
      }}
    >
      <Typography
        as='p'
      >
        {children}
      </Typography>
    </Block>
  )
}

Caption.defaultProps = {}

export { Caption }
