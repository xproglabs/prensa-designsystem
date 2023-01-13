import React from 'react'

import { Block } from '../../../primitives/Block'
import { Typography } from '../../../primitives/Typography'
import * as t from './types'

const SubtitleContainer: React.FC<t.SubtitleContainerProps> = ({
  css,
  children,
  customProps,
  defaultCss
}) => (
  <Block
    {...customProps}
    className={`TeaserSubtitle ${customProps?.className || ''}`}
    css={{ ...defaultCss, ...css }}
  >
    {children}
  </Block>
)

SubtitleContainer.defaultProps = {
  defaultCss: {
    align: ['column', 'left', 'top'],
    width: '100%'
  }
}

const SubtitleText: React.FC<t.SubtitleTextProps> = ({
  css,
  children,
  customProps,
  defaultCss,
  variant
}) => (
  <Typography
    as='p'
    className={`TeaserSubtitleText ${customProps?.className || ''}`}
    css={{ ...defaultCss, ...css }}
    variant={variant}
  >
    {children}
  </Typography>
)

SubtitleText.defaultProps = {
  defaultCss: {
    align: ['column', 'center', 'top'],
    my: 0
  },
  variant: 'subtitle-default'
}

export { SubtitleContainer, SubtitleText }
