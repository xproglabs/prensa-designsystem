import React from 'react'

import { Block } from '../../../index'
import * as t from './types'

const Column: React.FC<t.ColumnStyledProps> = (props) => (
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

const ColumnHolder: React.FC<t.ColumnHolderProps> = (props) => (
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

export { Column, ColumnHolder }