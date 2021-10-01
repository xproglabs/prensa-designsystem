import React from 'react'

import Block from '../Block'
import Typography from '../Typography'
import { RelatedItemProps } from './RelatedTypes'
import * as S from './styled'

const RelatedArea = ({ children }) => {
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
}: RelatedItemProps) => {
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

RelatedItem.defaultProps = {
  color: 'black',
  font_size: ['14px', '14px'],
  line_height: ['16px', '16px'],
  mb: [2, 2]
}

export { RelatedArea, RelatedItem }