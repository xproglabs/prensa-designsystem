import React from 'react'

import { Block } from '../../../primitives/Block'
import * as t from '../types'

const Column: React.FC<t.ColumnStyledProps> = ({
  css,
  children,
  customProps,
  defaultCss
}) => (
  <Block
    {...customProps}
    className={`Column ${customProps?.className || ''}`}
    css={{ ...defaultCss, ...css }}>
    {children}
  </Block>
)

Column.defaultProps = {
  defaultCss: {
    align: ['column', 'center', 'middle'],
    width: '100%',
    '.desktop': {
      display: 'none',
      '@lg': {
        display: 'flex'
      }
    },
    '.mobile': {
      '@lg': {
        display: 'none'
      }
    }
  }
}

const ColumnHolder: React.FC<t.ColumnHolderProps> = ({
  css,
  children,
  customProps,
  defaultCss
}) => (
  <Block
    {...customProps}
    className={`ColumnHolder ${customProps?.className || ''}`}
    css={{ ...defaultCss, ...css }}
  >
    {children}
  </Block>
)

ColumnHolder.defaultProps = {
  defaultCss: {
    align: ['column', 'center', 'middle'],
    width: '100%'
  }
}

export { Column, ColumnHolder }
