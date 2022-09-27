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
  slotLeftLayout,
  slotCenterLayout,
  slotRightLayout,
  slotLayouts,
  slotTemplate,
  templates
}) => {
  const template = get(templates, slotTemplate)

  const containerCss: PrensaEngineCSSProp = {
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
    items: slotAutoLeftElements,
    layout: get(slotLayouts, slotLeftLayout),
    name: 'Left'
  }
  const columnCenterProps: ColumnProps = {
    ...columnProps,
    items: slotAutoCenterElements,
    layout: get(slotLayouts, slotCenterLayout),
    name: 'Center'
  }
  const columnRightProps: ColumnProps = {
    ...columnProps,
    items: slotAutoRightElements,
    layout: get(slotLayouts, slotRightLayout),
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
