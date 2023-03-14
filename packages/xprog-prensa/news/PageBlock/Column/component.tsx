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
  name,
  wrapperTop = { enabled: false, component: null },
  wrapperContent = { enabled: false, component: null },
  wrapperBottom = { enabled: false, component: null },
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
      ...item,
      css: {
        ...css?.item,
        ...layout?.css?.item,
        ...itemMobile?.css
      },
      customProps: {
        ...customProps?.item,
        ...item?.customProps,
        className: `
          ${customProps?.item?.className || ''}
          ${layout?.customProps?.item?.className || ''}
          mobile
        `
      },
      numberValue: (position + 1).toString(),
      slotColor: color,
      slotName: name
    }
    const itemDesktopProps: ItemProps = {
      ...itemDesktop,
      ...item,
      css: {
        ...css?.item,
        ...layout?.css?.item,
        ...itemDesktop?.css
      },
      customProps: {
        ...customProps?.item,
        ...item?.customProps,
        className: `
          ${customProps?.item?.className || ''}
          ${layout?.customProps?.item?.className || ''}
          desktop
        `
      },
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

  const columnTop = map(itemsTop, (item: SlotItemsType, position: number) => renderItem({ item, position }))
  const columnContent = map(items, (item: SlotItemsType, position: number) => renderItem({ item, position }))
  const columnBottom = map(itemsBottom, (item: SlotItemsType, position: number) => renderItem({ item, position }))

  const renderWrapper = (d, p) => d.component ? d.component(p, renderItem) : p

  return (
    <S.Column {...columnProps}>
      <S.ColumnTop {...columnGroupProps}>
        {wrapperTop.enabled ? renderWrapper(wrapperTop, columnTop) : columnTop}
      </S.ColumnTop>
      <S.ColumnContent {...columnGroupProps}>
        {wrapperContent.enabled ? renderWrapper(wrapperContent, columnContent) : columnContent}
      </S.ColumnContent>
      <S.ColumnBottom {...columnGroupProps}>
        {wrapperBottom.enabled ? renderWrapper(wrapperBottom, columnBottom) : columnBottom}
      </S.ColumnBottom>
    </S.Column>
  )
}

export { Column }
