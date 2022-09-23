import React from 'react'

import { Block, Typography } from '../../../index'
import * as p from '../Column/parser'
import * as t from '../types'

const ItemLabel: React.FC<t.ItemTypes.ItemLabelProps> = ({
  css,
  children,
  customProps,
  defaultCss,
  variants
}) => (
  <Typography
    {...customProps}
    className={`ItemLabel ${customProps?.className || ''}`}
    css={{ ...defaultCss, ...css }}
    variant={p.getResponsiveStyle(variants)}
  >
    {children}
  </Typography>
)

ItemLabel.defaultProps = {
  defaultCss: {
    align: ['column', 'center', 'middle']
  },
  variants: ['menuTag-default', 'menuTag-desktop']
}

const ItemStyled: React.FC<t.ItemTypes.ItemStyled> = ({
  css,
  children,
  customProps,
  defaultCss
}) => (
  <Block
    {...customProps}
    className={`Item ${customProps?.className || ''}`}
    css={{ ...defaultCss, ...css }}>
    {children}
  </Block>
)

ItemStyled.defaultProps = {
  defaultCss: {
    align: ['column', 'center', 'middle'],
    width: '100%'
  }
}

export {
  ItemLabel,
  ItemStyled
}
