import { get } from 'lodash'
import React from 'react'

import { PrensaEngineCSSProp } from '../../types'
import { Column, ColumnHolder } from './Column'
import { ColumnProps } from './Column/types'
import { PageBlockContainer as Container } from './Container'
import { Item as DefaultItem } from './Item'
import { PageBlockProps } from './types'

export const PageBlock: React.FC<PageBlockProps> = ({
  css,
  customProps,
  itemComponent,
  slotAutoLeftElements,
  slotAutoCenterElements,
  slotAutoRightElements,
  slotLeftBgColor,
  slotLeftLayout,
  slotLeftTitleValue,
  slotCenterBgColor,
  slotCenterLayout,
  slotRightBgColor,
  slotRightLayout,
  slotLayouts,
  slotTemplate,
  templates,
  templateBgColor
}) => {
  const template = get(templates, slotTemplate)
  const templateBgColorValue: t.CSSType = templateBgColor ? { backgroundColor: `$${templateBgColor}` } : {}
  const slotLeftBgColorValue: t.CSSType = slotLeftBgColor ? { backgroundColor: `$${slotLeftBgColor}` } : {}
  const slotCenterBgColorValue: t.CSSType = slotCenterBgColor ? { backgroundColor: `$${slotCenterBgColor}` } : {}
  const slotRightBgColorValue: t.CSSType = slotRightBgColor ? { backgroundColor: `$${slotRightBgColor}` } : {}

  const containerCss: PrensaEngineCSSProp = {
    ...css?.container,
    ...template?.css?.container,
    ...templateBgColorValue
  }
  const containerProps = {
    customProps: {
      ...customProps?.container,
      ...template?.customProps?.container,
      className: `
        ${customProps?.container?.className || ''}
        ${template?.customProps?.container?.className || ''}
      `
    },
    css: containerCss
  }

  const columnHolderCss: PrensaEngineCSSProp = {
    ...css?.columnHolder,
    ...template?.css?.columnHolder
  }
  const columnHolderProps = {
    customProps: {
      ...customProps?.columnHolder,
      ...template?.customProps?.columnHolder,
      className: `
        ${customProps?.columnHolder?.className || ''}
        ${template?.customProps?.columnHolder?.className || ''}
      `
    },
    css: columnHolderCss
  }

  const columnProps: ColumnProps = {
    css: {
      column: {
        ...css?.column,
        ...template?.css?.column
      },
      item: {
        ...css?.item,
        ...template?.css?.item
      }
    },
    customProps: {
      column: {
        ...customProps?.column,
        ...template?.customProps?.column,
        className: `
          ${customProps?.column?.className || ''}
          ${template?.customProps?.column?.className || ''}
        `
      },
      item: {
        ...customProps?.item,
        ...template?.customProps?.item,
        className: `
          ${customProps?.item?.className || ''}
          ${template?.customProps?.item?.className || ''}
        `
      }
    },
    itemComponent
  }

  const columnLeftProps: ColumnProps = {
    ...columnProps,
    customProps: {
      ...columnProps?.customProps,
      item: {
        ...columnProps?.customProps?.item,
        
      }
    },
    css: {
      column: {
        ...css?.column,
        ...template?.css?.column,
        ...slotLeftBgColorValue
      },
      item: {
        ...css?.item,
        ...template?.css?.item
      }
    },
    items: slotAutoLeftElements,
    layout: getLayoutBySlotAndTemplate('Left', slotLeftLayout),
    name: 'Left'
  }
  const columnCenterProps: ColumnProps = {
    ...columnProps,
    css: {
      column: {
        ...css?.column,
        ...template?.css?.column,
        ...slotCenterBgColorValue
      },
      item: {
        ...css?.item,
        ...template?.css?.item
      }
    },
    items: slotAutoCenterElements,
    layout: getLayoutBySlotAndTemplate('Center', slotCenterLayout),
    name: 'Center'
  }
  const columnRightProps: ColumnProps = {
    ...columnProps,
    css: {
      column: {
        ...css?.column,
        ...template?.css?.column,
        ...slotRightBgColorValue
      },
      item: {
        ...css?.item,
        ...template?.css?.item
      }
    },
    items: slotAutoRightElements,
    layout: getLayoutBySlotAndTemplate('Right', slotRightLayout),
    name: 'Right'
  }

  return (
    <Container {...containerProps} css={containerCss}>
      <ColumnHolder {...columnHolderProps} css={columnHolderCss}>
        <Column {...columnLeftProps} />
        <Column {...columnCenterProps} />
        <Column {...columnRightProps} />
      </ColumnHolder>
    </Container>
  )
}

PageBlock.defaultProps = {
  itemComponent: DefaultItem
}
