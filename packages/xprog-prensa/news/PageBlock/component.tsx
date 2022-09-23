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
  slotLeftLayout,
  slotCenterLayout,
  slotRightLayout,
  slotLayouts,
  slotTemplate,
  templates
}) => {
  const template = get(templates, slotTemplate)

  const containerCss: t.CSSType = {
    ...css?.container,
    ...template?.css?.container
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

  const columnLeftProps: t.ColumnProps = {
    ...columnProps,
    items: slotAutoLeftElements,
    layout: get(slotLayouts, slotLeftLayout),
    name: 'Left'
  }
  const columnCenterProps: t.ColumnProps = {
    ...columnProps,
    items: slotAutoCenterElements,
    layout: get(slotLayouts, slotCenterLayout),
    name: 'Center'
  }
  const columnRightProps: t.ColumnProps = {
    ...columnProps,
    items: slotAutoRightElements,
    layout: get(slotLayouts, slotRightLayout),
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
