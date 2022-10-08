import { get, map } from 'lodash'
import React from 'react'

import { ItemProps, PageBlockCSSType, SlotConfigProps, SlotItemsType } from '../types'
import * as S from './styles'
import { ColumnProps } from './types'

const Column: React.FC<ColumnProps> = ({
  css,
  customProps,
  items,
  itemComponent,
  layout,
  name
}) => {
  const Item: any = itemComponent
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
  const getColumnItemLayout = ({ layout, position, size }): SlotConfigProps => {
    const defaultLayout = get(layout, 'default')
    const defaultBySize = get(layout, `[${size}]`)
    const defaultByNumber = get(layout, `[${size}:${position + 1}]`)
    return defaultByNumber || defaultBySize || defaultLayout
  }
  return (
    <S.Column {...columnProps}>
      {map(items, (item: SlotItemsType, position: number) => {
        const itemLayout: SlotConfigProps = getColumnItemLayout({
          layout,
          position,
          size: items ? items.length : 0
        })
        const itemMobile: PageBlockCSSType = get(itemLayout, [0])
        const itemDesktop: PageBlockCSSType = get(itemLayout, [1])
        const itemMobileProps: ItemProps = {
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
        const itemDesktopProps: ItemProps = {
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
