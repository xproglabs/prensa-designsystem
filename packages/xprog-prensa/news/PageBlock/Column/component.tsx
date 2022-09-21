import { get, map } from 'lodash'
import React from 'react'

import { ItemProps } from '../Item/types'
import * as p from './parser'
import * as S from './styles'
import * as t from './types'

const Column: React.FC<t.ColumnProps> = (props) => {
  
  const { name, layouts, slot } = props

  const Item: React.ElementType<ItemProps> = props.Item

  // const slotLayoutName = p.getConfigForSlot({ slotConfig, slotPosition })
  // const slotLayout = get(columns, slotLayoutName, false)
  // console.log('templates', templates)
  if (!layouts) return null
  return (
    <S.Column
      customCss={props?.customCss}
      // {...props.customProps.column}
    >
      {map(slot, (item: ItemProps, key) => {
        const length = slot.length
        const itemLayout = p.getTemplateForTeaser(key, layouts, length)
        const itemMobile = get(itemLayout, [0])
        const itemDesktop = get(itemLayout, [1])
        return (
          <React.Fragment key={key}>
            {React.cloneElement(
              <Item
                defaultCss={itemMobile}
                className={`${name} mobile`}
                // customCss={props.customCss.item}
                // {...customItemProps}
                {...item}
              />
            )}
            {React.cloneElement(
              <Item
                defaultCss={itemDesktop}
                className={`${name} desktop`}
                // customCss={props.customCss.item}
                // {...customItemProps}
                {...item}
              />
            )}
          </React.Fragment>
        )
      })}
    </S.Column>
  )
}

export { Column }
