import React from 'react'

import * as t from '../types'
import * as S from './styles'

const Item: React.FC<t.ItemProps> = ({
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

export { Item }
