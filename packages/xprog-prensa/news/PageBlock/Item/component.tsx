import React from 'react'

import * as S from './styles'
import { ItemProps } from './types'

export const Item: React.FC<ItemProps> = ({
  children,
  customProps,
  css,
  name,
  path
}) => {
  return (
    <S.ItemStyled
      css={css}
      customProps={customProps}
    >
      {children || (
        <a href={path}>
          <S.ItemLabel>{name}</S.ItemLabel>
        </a>
      )}
    </S.ItemStyled>
  )
}
