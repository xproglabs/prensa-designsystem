import { get } from 'lodash'
import React from 'react'

import { PrensaEngineCSSProp } from '../../types'
import { Column, ColumnHolder } from './Column'
import { ColumnProps } from './Column/types'
import { PageBlockContainer } from './Container'
import { Item as DefaultItem } from './Item'
import { PageBlockProps, PageBlockCSSType } from './types'

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

  const getLayoutBySlotAndTemplate = (name, slot) => {
    const layoutSelected = get(slotLayouts, slot)
    const layoutSlotConfig = get(layoutSelected, `slotConfig[${slotTemplate}][slot${name}]`)
    return {
      css: layoutSelected?.css,
      ...layoutSlotConfig
    }
  }
  const leftColumnLayout = getLayoutBySlotAndTemplate('Left', slotLeftLayout)
  const centerColumnLayout = getLayoutBySlotAndTemplate('Center', slotCenterLayout)
  const rightColumnLayout = getLayoutBySlotAndTemplate('Right', slotRightLayout)

  const template = get(templates, slotTemplate)
  const templateBgColorValue: PageBlockCSSType = templateBgColor ? { backgroundColor: `$${templateBgColor}` } : {}
  const slotLeftBgColorValue: PageBlockCSSType = slotLeftBgColor ? { backgroundColor: `$${slotLeftBgColor}` } : {}
  const slotCenterBgColorValue: PageBlockCSSType = slotCenterBgColor ? { backgroundColor: `$${slotCenterBgColor}` } : {}
  const slotRightBgColorValue: PageBlockCSSType = slotRightBgColor ? { backgroundColor: `$${slotRightBgColor}` } : {}

  const containerCss: PageBlockCSSType = {
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

  const columnHolderCss: PageBlockCSSType = {
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
    layout: leftColumnLayout,
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
    layout: centerColumnLayout,
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
    layout: rightColumnLayout,
    name: 'Right'
  }

  return (
    <PageBlockContainer {...containerProps} css={containerCss}>
      <ColumnHolder {...columnHolderProps} css={columnHolderCss}>
        <Column {...columnLeftProps} />
        <Column {...columnCenterProps} />
        <Column {...columnRightProps} />
      </ColumnHolder>
    </PageBlockContainer>
  )
}

PageBlock.defaultProps = {
  itemComponent: DefaultItem
}
