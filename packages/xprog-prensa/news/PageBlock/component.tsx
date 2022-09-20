import { get, map } from 'lodash'
import React from 'react'
import * as S from './styles'
import * as p from './parser'
import * as t from './types'

const PageBlock: React.FC<t.PageBlockProps> = (props) => {

  const Item: React.ElementType<t.ItemProps> = props.itemComponent

  const layouts = props.layouts

  const RenderColumn = ({ name, slot }) => {
    // const slotLayoutName = p.getConfigForSlot({ slotConfig, slotPosition })
    // const slotLayout = get(columns, slotLayoutName, false)
    if (!layouts) return null
    const RenderItem = ({ item, position }) => {
      const length = slot.length
      const itemLayout = p.getTemplateForTeaser(position, layouts, length)
      const itemMobile = get(itemLayout, [0])
      const itemDesktop = get(itemLayout, [1])
      return (
        <>
          {React.cloneElement(
            <Item
              defaultCss={itemMobile}
              className={`${name} mobile`}
              customCss={props.customCss.item}
              hideInMobile={false}
              hideInDesktop={true}
              // {...customItemProps}
              {...item}
            />
          )}
          {React.cloneElement(
            <Item
              defaultCss={itemDesktop}
              className={`${name} desktop`}
              customCss={props.customCss.item}
              hideInMobile={true}
              hideInDesktop={false}
              // {...customItemProps}
              {...item}
            />
          )}
        </>
      )
    }
    return (
      <S.Column
        customCss={slotLayout.customColumnCss}
        {...props.customProps.column}
      >
        {map(slot, (item: t.ItemProps, key) => (
          <RenderItem key={key} item={item} position={key} />
        ))}
      </S.Column>
    )
  }
  return (
    <S.Container
      customCss={props.customCss.container}
      {...props.customProps.container}
    >
      <S.ColumnHolder
        customCss={props.customCss.columnHolder}
        {...props.customProps.columnHolder}>
        <RenderColumn
          name="slotAutoLeftElements"
          slot={props.slotAutoLeftElements}
        />
        <RenderColumn
          name="slotAutoCenterElements"
          slot={props.slotAutoCenterElements}
        />
        <RenderColumn
          name="slotAutoRighElements"
          slot={props.slotAutoRightElements}
        />
      </S.ColumnHolder>
    </S.Container>
  )
}

const Item: React.FC<t.ItemProps> = (props) => {
  return (
    <S.Item
      className={props.className}
      customCss={{ ...props.defaultCss, ...props.customCss }}
      {...props.customProps}
    >
      <a href={props.path}>
        <S.ItemLabel name={props.name} path={props.path}>
          {props.name}
        </S.ItemLabel>
      </a>
    </S.Item>
  )
}

PageBlock.defaultProps = {
  itemComponent: Item
}

export { PageBlock, Item as PageBlockItem }
