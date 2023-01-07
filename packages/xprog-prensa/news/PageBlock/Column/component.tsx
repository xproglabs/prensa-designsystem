import { get, map } from 'lodash'
import React from 'react'

import { ItemProps, SlotConfigProps, SlotItemsType } from '../types'
import * as S from './styles'
import { ColumnProps } from './types'

const Column: React.FC<ColumnProps> = ({
  css,
  customProps,
  color,
  items,
  itemsBottom,
  itemsTop,
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
  const columnGroupProps = {
    css: {
      ...css?.column,
      ...layout?.css?.column
    },
    customProps: {
      ...customProps?.column,
      ...layout?.customProps?.column
    }
  }
  const getColumnItemLayout = ({ layout, position, size }): SlotConfigProps => {
    const defaultLayout = get(layout, 'default')
    const defaultBySize = get(layout, `[${size}]`)
    const defaultByNumber = get(layout, `[${size}:${position + 1}]`)
    return defaultByNumber || defaultBySize || defaultLayout
  }

  const renderItem = ({ item, position }) => {
    const itemLayout: SlotConfigProps = getColumnItemLayout({
      layout,
      position,
      size: items ? items.length : 0
    })
    const itemMobile: SlotConfigProps = get(itemLayout, [0])
    const itemDesktop: SlotConfigProps = get(itemLayout, [1])
    const itemMobileProps: ItemProps = {
      ...itemMobile,
      css: {
        ...css?.item,
        ...layout?.css?.item,
        ...itemMobile?.css
      },
      customProps: {
        ...customProps?.item,
        className: `
          ${customProps?.item?.className || ''}
          ${layout?.customProps?.item?.className || ''}
          mobile
        `
      },
      ...item,
      numberValue: (position + 1).toString(),
      slotColor: color,
      slotName: name
    }
    const itemDesktopProps: ItemProps = {
      ...itemDesktop,
      css: {
        ...css?.item,
        ...layout?.css?.item,
        ...itemDesktop?.css
      },
      customProps: {
        ...customProps?.item,
        className: `
          ${customProps?.item?.className || ''}
          ${layout?.customProps?.item?.className || ''}
          desktop
        `
      },
      ...item,
      numberValue: (position + 1).toString(),
      slotColor: color,
      slotName: name
    }
    return (
      <React.Fragment key={position}>
        <Item {...itemMobileProps} />
        <Item {...itemDesktopProps} />
      </React.Fragment>
    )
  }

  return (
    <S.Column {...columnProps}>
      <S.ColumnTop {...columnGroupProps}>
        {map(itemsTop, (item: SlotItemsType, position: number) =>
          renderItem({ item, position })
        )}
      </S.ColumnTop>
      <S.ColumnContent {...columnGroupProps}>
        {map(items, (item: SlotItemsType, position: number) =>
          renderItem({ item, position })
        )}
      </S.ColumnContent>
      <S.ColumnBottom {...columnGroupProps}>
        {map(itemsBottom, (item: SlotItemsType, position: number) =>
          renderItem({ item, position })
        )}
      </S.ColumnBottom>
    </S.Column>
  )
}

export { Column }
