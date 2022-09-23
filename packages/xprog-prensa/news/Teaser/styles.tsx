import React from 'react'

import { Block, Typography } from '../../index'
import * as t from './types'

const TeaserLabel: React.FC<t.TeaserLabelProps> = ({
  css,
  children,
  customProps,
  defaultCss
}) => (
  <Typography
    {...customProps}
    className={`TeaserLabel ${customProps?.className || ''}`}
    css={{ ...defaultCss, ...css }}
  >
    {children}
  </Typography>
)

TeaserLabel.defaultProps = {
  defaultCss: {
    align: ['column', 'center', 'middle']
  },
  variants: ['menuTag-default', 'menuTag-desktop']
}

const TeaserStyled: React.FC<t.TeaserStyled> = ({
  css,
  children,
  customProps,
  defaultCss
}) => (
  <Block
    {...customProps}
    className={`Teaser ${customProps?.className || ''}`}
    css={{ ...defaultCss, ...css }}>
    {children}
  </Block>
)

TeaserStyled.defaultProps = {
  defaultCss: {
    align: ['column', 'center', 'middle'],
    width: '100%'
  }
}

export {
  TeaserLabel,
  TeaserStyled
}
