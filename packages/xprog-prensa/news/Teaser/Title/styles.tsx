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
    className={`TitleContainer ${customProps?.className || ''}`}
    css={{ ...defaultCss, ...css }}>
    {children}
  </Block>
)

TitleContainer.defaultProps = {
  defaultCss: {
    align: ['column', 'center', 'middle'],
    width: '100%'
  }
}

const TitleStyled: React.FC<t.TitleStyledProps> = ({
  css,
  children,
  customProps,
  defaultCss,
  variant
}) => (
  <Typography
    as='p'
    className={`TitleStyled ${customProps?.className || ''}`}
    css={{ ...defaultCss, ...css }}
    variant={variant}
  >
    {children}
  </Typography>
)

TitleStyled.defaultProps = {
  defaultCss: {
    align: ['column', 'center', 'middle']
  },
  variants: ['menuTag-default', 'menuTag-desktop']
}


export {
  TitleContainer,
  TitleStyled
}
