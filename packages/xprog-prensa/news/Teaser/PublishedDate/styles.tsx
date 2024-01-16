import React from 'react'

import { Block } from '../../../primitives/Block'
import { Typography } from '../../../primitives/Typography'
import * as t from './types'

const PublishedContainer: React.FC<t.DateContainerProps> = ({
  css,
  children,
  customProps,
  defaultCss
}) => (
  <Block
    {...customProps}
    className={`TeaserPublishedDate ${customProps?.className || ''}`}
    css={{ ...defaultCss, ...css }}
  >
    {children}
  </Block>
)

PublishedContainer.defaultProps = {
  defaultCss: {
    align: ['column', 'left', 'top'],
    width: '100%'
  }
}

const PublishedText: React.FC<t.DateProps> = ({
  css,
  children,
  customProps,
  defaultCss,
  variant
}) => (
  <Typography
    as='p'
    className={`TeaserPublishedDateText ${customProps?.className || ''}`}
    css={{ ...defaultCss, ...css }}
    variant={variant}
  >
    {children}
  </Typography>
)

PublishedText.defaultProps = {
  defaultCss: {
    align: ['column', 'center', 'top'],
    my: 0
  },
  variant: 'newsTitle-sm'
}

export { PublishedContainer, PublishedText }
