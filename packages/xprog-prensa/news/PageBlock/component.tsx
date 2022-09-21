import { get } from 'lodash'
import React from 'react'

import { Column, ColumnHolder } from './Column'
import { Item as DefaultItem } from './Item'
import * as S from './styles'
import * as t from './types'

const PageBlock: React.FC<t.PageBlockProps> = (props) => {
  const templateLayout = get(props.templates, props.slotTemplate)
  return (
    <S.Container
      customCss={{
        ...props?.customCss?.container,
        ...templateLayout?.customCss?.container
      }}
      {...props?.customProps?.container}
      {...templateLayout?.customProps?.container}
    >
      <ColumnHolder
        customCss={{
          ...props?.customCss?.columnHolder,
          ...templateLayout?.customCss?.columnHolder
        }}
        {...props?.customProps?.columnHolder}
        {...templateLayout?.customProps?.columnHolder}
      >
        <Column
          customCss={{
            ...props?.customCss?.column,
            ...templateLayout?.customCss?.column
          }}
          layouts={props.layouts}
          Item={props.itemComponent}
          name="slotAutoLeftElements"
          slot={props.slotAutoLeftElements}
        />
        <Column
          layouts={props.layouts}
          Item={props.itemComponent}
          name="slotAutoCenterElements"
          slot={props.slotAutoCenterElements}
        />
        <Column
          layouts={props.layouts}
          Item={props.itemComponent}
          name="slotAutoRighElements"
          slot={props.slotAutoRightElements}
        />
      </ColumnHolder>
    </S.Container>
  )
}

PageBlock.defaultProps = {
  itemComponent: DefaultItem
}

export { PageBlock }
