import { get } from 'lodash'
import React from 'react'

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
  slotManualTopLeft,
  slotManualTopCenter,
  slotManualTopRight,
  slotManualBottomLeft,
  slotManualBottomCenter,
  slotManualBottomRight,
  slotManualExtra,
  slotManualExtraTop,
  slotLeftBgColor,
  slotLeftColor,
  slotLeftLayout,
  slotCenterBgColor,
  slotCenterColor,
  slotCenterLayout,
  slotRightBgColor,
  slotRightColor,
  slotRightLayout,
  slotLayouts,
  slotTemplate,
  templates,
  templateBgColor,
  wrappers
}) => {
  const getLayoutBySlotAndTemplate = (name, slot) => {
    const layoutSelected = get(slotLayouts, slot)
    const layoutSlotConfig = get(layoutSelected, `slotConfig[${slotTemplate}][slot${name}]`)
    return {
      css: layoutSelected?.css,
      ...layoutSlotConfig,
      wrapperTop: layoutSelected?.wrapperTop,
      wrapperContent: layoutSelected?.wrapperContent,
      wrapperBottom: layoutSelected?.wrapperBottom
    }
  }
  const leftColumnLayout = getLayoutBySlotAndTemplate('Left', slotLeftLayout)
  const centerColumnLayout = getLayoutBySlotAndTemplate('Center', slotCenterLayout)
  const rightColumnLayout = getLayoutBySlotAndTemplate('Right', slotRightLayout)

  const template = get(templates, slotTemplate || '')
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
        ...columnProps?.customProps?.item
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
    color: slotLeftColor,
    items: slotAutoLeftElements,
    itemsBottom: slotManualBottomLeft,
    itemsTop: slotManualTopLeft,
    layout: leftColumnLayout,
    name: 'Left',
    wrapperTop: leftColumnLayout.wrapperTop,
    wrapperContent: leftColumnLayout.wrapperContent,
    wrapperBottom: leftColumnLayout.wrapperBottom
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
    color: slotCenterColor,
    items: slotAutoCenterElements,
    itemsBottom: slotManualBottomCenter,
    itemsTop: slotManualTopCenter,
    layout: centerColumnLayout,
    name: 'Center',
    wrapperTop: centerColumnLayout.wrapperTop,
    wrapperContent: centerColumnLayout.wrapperContent,
    wrapperBottom: centerColumnLayout.wrapperBottom
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
    color: slotRightColor,
    items: slotAutoRightElements,
    itemsBottom: slotManualBottomRight,
    itemsTop: slotManualTopRight,
    layout: rightColumnLayout,
    name: 'Right',
    wrapperTop: rightColumnLayout.wrapperTop,
    wrapperContent: rightColumnLayout.wrapperContent,
    wrapperBottom: rightColumnLayout.wrapperBottom
  }
  const columnExtraProps: ColumnProps = {
    ...columnProps,
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
    items: slotManualExtra,
    name: 'Extra'
  }
  const columnExtraTopProps: ColumnProps = {
    ...columnProps,
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
    items: slotManualExtraTop,
    name: 'ExtraTop'
  }

  return (
    <PageBlockContainer {...containerProps} css={containerCss}>
      {slotManualExtraTop && slotManualExtraTop.length > 0 && (
        <ColumnHolder {...columnHolderProps} css={columnHolderCss}>
          <Column
            {...columnExtraTopProps}
            wrapperTop={wrappers?.columnExtraTop?.slotTop}
            wrapperContent={wrappers?.columnExtraTop?.slotMiddle}
            wrapperBottom={wrappers?.columnExtraTop?.slotBottom}
          />
        </ColumnHolder>
      )}
      <ColumnHolder {...columnHolderProps} css={columnHolderCss}>
        <Column
          {...columnLeftProps}
          wrapperTop={wrappers?.columnLeft?.slotTop}
          wrapperContent={wrappers?.columnLeft?.slotMiddle}
          wrapperBottom={wrappers?.columnLeft?.slotBottom}
        />
        <Column
          {...columnCenterProps}
          wrapperTop={wrappers?.columnCenter?.slotTop}
          wrapperContent={wrappers?.columnCenter?.slotMiddle}
          wrapperBottom={wrappers?.columnCenter?.slotBottom}
        />
        <Column
          {...columnRightProps}
          wrapperTop={wrappers?.columnRight?.slotTop}
          wrapperContent={wrappers?.columnRight?.slotMiddle}
          wrapperBottom={wrappers?.columnRight?.slotBottom}
        />
      </ColumnHolder>
      {slotManualExtra && slotManualExtra.length > 0 && (
        <ColumnHolder {...columnHolderProps} css={columnHolderCss}>
          <Column
            {...columnExtraProps}
            wrapperTop={wrappers?.columnExtraTop?.slotTop}
            wrapperContent={wrappers?.columnExtraTop?.slotMiddle}
            wrapperBottom={wrappers?.columnExtraTop?.slotBottom}
          />
        </ColumnHolder>
      )}
    </PageBlockContainer>
  )
}

PageBlock.defaultProps = {
  itemComponent: DefaultItem
}
