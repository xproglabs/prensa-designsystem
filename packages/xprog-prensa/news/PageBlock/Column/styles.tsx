import React from 'react'

import { Block } from '../../../primitives/Block'
import { ColumnHolderProps, ColumnStyledProps } from './types'

export const Column: React.FC<ColumnStyledProps> = ({
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
    align: ['column', 'center', 'top'],
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

export const ColumnHolder: React.FC<ColumnHolderProps> = ({
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
