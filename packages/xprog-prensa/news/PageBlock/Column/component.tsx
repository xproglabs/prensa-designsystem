import { get, map } from 'lodash'
import React from 'react'

import * as t from '../types'
import * as p from './parser'
import * as S from './styles'

const Column: React.FC<t.ColumnTypes.ColumnProps> = ({
  customCss,
  customProps,
  items,
  itemComponent,
  layout,
  name
}) => {
  const Item: t.ItemTypes.ItemDefaultType = itemComponent
  const columnProps = {
    css: {
      ...customCss?.column,
      ...layout?.customCss?.column
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
  return (
    <S.Column {...columnProps}>
      {map(items, (item: t.SlotItemsType, position: number) => {
        const itemLayout: t.SlotLayoutConfig = p.getColumnItemLayout(
          layout,
          position,
          items.length
        )
        const itemMobile: t.CSSType = get(itemLayout, [0])
        const itemDesktop: t.CSSType = get(itemLayout, [1])
        const itemMobileProps: t.ItemTypes.ItemProps = {
          customCss: {
            ...customCss?.item,
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
        const itemDesktopProps: t.ItemTypes.ItemProps = {
          customCss: {
            ...customCss?.item,
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
            {React.cloneElement(<Item {...itemMobileProps} />)}
            {React.cloneElement(<Item {...itemDesktopProps} />)}
          </React.Fragment>
        )
      })}
    </S.Column>
  )
}

export { Column }
