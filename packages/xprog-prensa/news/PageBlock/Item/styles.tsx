import { first, isArray, last } from 'lodash'
import React from 'react'

import { Block } from '../../../primitives/Block'
import { Typography } from '../../../primitives/Typography'
import { ItemLabelProps, ItemStyledProps } from './types'

export const ItemLabel: React.FC<ItemLabelProps> = ({
  css,
  children,
  customProps,
  defaultCss,
  variants
}) => {
  return (
    <Typography
      {...customProps}
      className={`ItemLabel ${customProps?.className || ''}`}
      css={{ ...defaultCss, ...css }}
      // @ts-ignore
      variant={
        isArray(variants)
          ? { '@initial': first(variants), '@lg': last(variants) }
          : variants
      }
    >
      {children}
    </Typography>
  )
}

ItemLabel.defaultProps = {
  defaultCss: {
    align: ['column', 'center', 'middle']
  },
  variants: ['menuTag-default', 'menuTag-desktop']
}

export const ItemStyled: React.FC<ItemStyledProps> = ({
  css,
  children,
  customProps,
  defaultCss
}) => (
  <Block
    {...customProps}
    className={`Item ${customProps?.className || ''}`}
    css={{ ...defaultCss, ...css }}
  >
    {children}
  </Block>
)

ItemStyled.defaultProps = {
  defaultCss: {
    align: ['column', 'center', 'middle'],
    width: '100%'
  }
}
