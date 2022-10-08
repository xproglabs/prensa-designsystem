import React from 'react'

import { Block } from '../../../primitives/Block'
import { Typography } from '../../../primitives/Typography'
import * as t from './types'

const NumberContainer: React.FC<t.NumberContainerProps> = ({
  css,
  children,
  customProps,
  defaultCss
}) => (
  <Block
    {...customProps}
    className={`TeaserNumber ${customProps?.className || ''}`}
    css={{ ...defaultCss, ...css }}
  >
    {children}
  </Block>
)

NumberContainer.defaultProps = {
  defaultCss: {
    align: ['column', 'left', 'top'],
    width: '100%'
  }
}

const NumberText: React.FC<t.NumberTextProps> = ({
  css,
  children,
  customProps,
  defaultCss,
  variant
}) => (
  <Typography
    as='span'
    className={`TeaserNumberText ${customProps?.className || ''}`}
    css={{ ...defaultCss, ...css }}
    variant={variant}
  >
    {children}
  </Typography>
)

NumberText.defaultProps = {
  defaultCss: {
    align: ['column', 'center', 'top'],
    my: 0
  }
}

export { NumberContainer, NumberText }
