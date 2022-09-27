import { get } from 'lodash'
import React from 'react'

import { Column, ColumnHolder } from './Column'
import { Item as DefaultItem } from './Item'
import * as S from './styles'
import * as t from './types'

const PageBlock: React.FC<t.PageBlockProps> = ({
  css,
  customProps,
  itemComponent,
  slotAutoLeftElements,
  slotAutoCenterElements,
  slotAutoRightElements,
  slotLeftBgColor,
  slotLeftLayout,
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

  const containerCss: t.CSSType = {
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

  const columnHolderCss: t.CSSType = {
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

  const columnProps: t.ColumnProps = {
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

  const getLayoutBySlotAndTemplate = (name, slot) => {
    const layoutSelected = get(slotLayouts, slot)
    const layoutSlotConfig = get(layoutSelected, `slotConfig[${slotTemplate}][slot${name}]`)
    return {
      css: layoutSelected?.css,
      ...layoutSlotConfig
    }
  }

  const columnLeftProps: t.ColumnProps = {
    ...columnProps,
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
  const columnCenterProps: t.ColumnProps = {
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
  const columnRightProps: t.ColumnProps = {
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
    <S.Container {...containerProps} css={containerCss}>
      <ColumnHolder {...columnHolderProps} css={columnHolderCss}>
        <Column {...columnLeftProps} />
        <Column {...columnCenterProps} />
        <Column {...columnRightProps} />
      </ColumnHolder>
    </S.Container>
  )
}

PageBlock.defaultProps = {
  itemComponent: DefaultItem
}

export { PageBlock }
