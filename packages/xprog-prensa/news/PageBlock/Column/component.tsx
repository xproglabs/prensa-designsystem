import { get, map } from 'lodash'
import React from 'react'

import * as t from '../types'
import * as S from './styles'

const Column: React.FC<t.ColumnProps> = ({
  css,
  customProps,
  items,
  itemComponent,
  layout,
  name
}) => {
  const Item: t.ItemDefaultType = itemComponent
  const columnProps = {
    css: {
      ...css?.column,
      ...layout?.css?.column
    },
    customProps: {
      ...customProps?.column,
      ...layout?.customProps?.column,
      className: `Column ${name || ''}
        ${layout?.customProps?.column?.className || ''}
        ${customProps?.column?.className || ''}
      `
    }
  }
  const getColumnItemLayout = ({ layout, position, size }): t.SlotConfigProps => {
    const defaultLayout = get(layout, 'default')
    const defaultBySize = get(layout, `[${size}]`)
    const defaultByNumber = get(layout, `[${size}:${position + 1}]`)
    return defaultByNumber || defaultBySize || defaultLayout
  }
  return (
    <S.Column {...columnProps}>
      {map(items, (item: t.SlotItemsType, position: number) => {
        const itemLayout: t.SlotConfigProps = getColumnItemLayout({
          layout,
          position,
          size: items.length
        })
        const itemMobile: t.CSSType = get(itemLayout, [0])
        const itemDesktop: t.CSSType = get(itemLayout, [1])
        const itemMobileProps: t.ItemProps = {
          css: {
            ...css?.item,
            ...itemMobile
          },
          customProps: {
            ...customProps?.item,
            className: `
              ${customProps?.item?.className || ''}
              ${layout?.customProps?.item?.className || ''}
              mobile
            `
          },
          ...item
        }
        const itemDesktopProps: t.ItemProps = {
          css: {
            ...css?.item,
            ...itemDesktop
          },
          customProps: {
            ...customProps?.item,
            className: `
              ${customProps?.item?.className || ''}
              ${layout?.customProps?.item?.className || ''}
              desktop
            `
          },
          ...item
        }
        return (
          <React.Fragment key={position}>
            <Item {...itemMobileProps} />
            <Item {...itemDesktopProps} />
          </React.Fragment>
        )
      })}
    </S.Column>
  )
}

export { Column }
