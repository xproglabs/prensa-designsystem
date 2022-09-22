import { get } from 'lodash'
import React from 'react'

import { Column, ColumnHolder } from './Column'
import { Item as DefaultItem } from './Item'
import * as S from './styles'
import * as t from './types'

const PageBlock: React.FC<t.TemplateProps> = ({
  customCss,
  customProps,
  itemComponent,
  layouts,
  slotAutoLeftElements,
  slotAutoCenterElements,
  slotAutoRightElements,
  slotTemplate,
  templates
}) => {
  const template = get(templates, slotTemplate)

  const containerCss: t.CSSType = {
    ...customCss?.container,
    ...template?.customCss?.container
  }
  const containerProps = {
    customProps: {
      ...customProps?.container,
      ...template?.customProps?.container,
    },
    css: containerCss,
    itemComponent,
    layouts
  }

  const columnHolderCss: t.CSSType = {
    ...customCss?.columnHolder,
    ...template?.customCss?.columnHolder
  }
  const columnHolderProps = {
    customProps: {
      ...customProps?.columnHolder,
      ...template?.customProps?.columnHolder,
    },
    css: columnHolderCss,
    itemComponent,
    layouts
  }

  const columnCss: t.CSSType = {
    ...customCss?.column,
    ...template?.customCss?.column
  }
  const columnProps = {
    customProps: {
      ...customProps?.column,
      ...template?.customProps?.column,
    },
    css: columnCss,
    itemComponent,
    layouts
  }
  return (
    <S.Container {...containerProps} css={containerCss}>
      <ColumnHolder {...columnHolderProps} css={columnHolderCss}>
        <Column
          {...columnProps}
          name='columnLeft'
          slot={slotAutoLeftElements}
        />
        <Column
          {...columnProps}
          name='columnCenter'
          slot={slotAutoCenterElements}
        />
        <Column
          {...columnProps}
          name='columnRight'
          slot={slotAutoRightElements}
        />
      </ColumnHolder>
    </S.Container>
  )
}

PageBlock.defaultProps = {
  itemComponent: DefaultItem
}

export { PageBlock }
