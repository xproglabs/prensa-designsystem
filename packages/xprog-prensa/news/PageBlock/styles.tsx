import React from 'react'
import { Block, Typography } from '../../index'
import { parseVariants } from './parser'
import * as t from './types'

const Column: React.FC<t.Column> = (props) => (
  <Block
    className='Column'
    css={{
      ...props.defaultCss,
      ...props.customCss
    }}
  >
    {props.children}
  </Block>
)

Column.defaultProps = {
  defaultCss: {
    align: ['column', 'center', 'middle'],
    width: '100%'
  }
}

const ColumnHolder: React.FC<t.ColumnHolder> = (props) => (
  <Block
    className='ColumnHolder'
    css={{
      ...props.defaultCss,
      ...props.customCss
    }}
  >
    {props.children}
  </Block>
)

ColumnHolder.defaultProps = {
  defaultCss: {
    align: ['column', 'center', 'middle'],
    width: '100%'
  }
}

const Container: React.FC<t.Container> = (props) => (
  <Block
    className='PageBlock'
    css={{
      ...props.defaultCss,
      ...props.customCss
    }}
  >
    {props.children}
  </Block>
)

Container.defaultProps = {
  defaultCss: {
    align: ['column', 'center', 'middle'],
    mb: '$4',
    width: '100%'
  }
}

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
  Column,
  ColumnHolder,
  Container,
  ItemLabel,
  Item
}
