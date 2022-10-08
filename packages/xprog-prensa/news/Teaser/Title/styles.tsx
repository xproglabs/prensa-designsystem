import React from 'react'

import { Block } from '../../../primitives/Block'
import { Typography } from '../../../primitives/Typography'
import * as t from './types'

const TitleContainer: React.FC<t.TitleContainerProps> = ({
  css,
  children,
  customProps,
  defaultCss
}) => (
  <Block
    {...customProps}
    className={`TeaserTitle ${customProps?.className || ''}`}
    css={{ ...defaultCss, ...css }}
  >
    {children}
  </Block>
)

TitleContainer.defaultProps = {
  defaultCss: {
    align: ['column', 'left', 'top'],
    width: '100%'
  }
}

const TitleText: React.FC<t.TitleTextProps> = ({
  css,
  children,
  customProps,
  defaultCss,
  variant
}) => (
  <Typography
    as='p'
    className={`TeaserTitleText ${customProps?.className || ''}`}
    css={{ ...defaultCss, ...css }}
    variant={variant}
  >
    {children}
  </Typography>
)

TitleText.defaultProps = {
  defaultCss: {
    align: ['column', 'center', 'top'],
    my: 0
  },
  variant: 'newstitle-sm'
}

export { TitleContainer, TitleText }
