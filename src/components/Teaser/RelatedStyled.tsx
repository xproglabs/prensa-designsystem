import React from 'react'

import Block from '../Block'
import Typography from '../Typography'
import {
  RelatedAreaProps,
  RelatedProps
} from './RelatedTypes'
import * as S from './styled'

const RelatedArea = ({
  children
}: RelatedAreaProps) => {
  return (
    <Block
      align="column"
      alignx="left"
      aligny="top"
      lg={{
        align: 'row',
        alignx: 'between',
        aligny: 'top',
        custom: 'flex-wrap: wrap;'
      }}
      width="100%">
      {children}
    </Block>
  )
}

const RelatedItem = ({
  children,
  color,
  font_size,
  line_height,
  item_path
}: RelatedProps) => {
  return (
    <Typography
      color={color}
      element='h2'
      fontFamily='primary'
      fontSize={font_size[0]}
      fontWeight={300}
      lineHeight={line_height[0]}
      lg={{
        fontSize: font_size[1],
        lineHeight: line_height[1]
      }}
      mb={2}>
      <S.AreaLink
        href={item_path}>
        - {children}
      </S.AreaLink>
    </Typography> 
  )
}

export { RelatedArea, RelatedItem }