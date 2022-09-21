import React from 'react'

import { Block, Typography } from '../../../index'
import { parseVariants } from '../Column/parser'
import * as t from './types'

const Item: React.FC<t.ItemProps> = (props) => (
  <Block
    className={`Item ${props.className}`}
    css={{
      ...props.defaultCss,
      ...props.customCss
    }}
  >
    {props.children}
  </Block>
)

Item.defaultProps = {
  defaultCss: {
    align: ['column', 'center', 'middle'],
    width: '100%'
  }
}

const ItemLabel: React.FC<t.ItemLabelProps> = (props) => (
  <Typography
    className='ItemLabel'
    css={{
      ...props.defaultCss,
      ...props.customCss
    }}
    variant={parseVariants(props.variants)}
  >
    {props.children}
  </Typography>
)

ItemLabel.defaultProps = {
  defaultCss: {
    align: ['column', 'center', 'middle']
  },
  variants: ['menuTag-default', 'menuTag-desktop']
}

export {
  Item,
  ItemLabel
}
