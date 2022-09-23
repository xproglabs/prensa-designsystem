import React from 'react'

import * as t from '../types'
import * as S from './styles'

const Item: React.FC<t.ItemTypes.ItemProps> = ({
  children,
  customProps,
  customCss,
  name,
  path
}) => {
  return (
    <S.ItemStyled
      css={customCss}
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
