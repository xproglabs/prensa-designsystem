import React from 'react'

import * as S from './styles'
import * as t from './types'

const Title: React.FC<t.TitleProps> = ({
  children,
  css,
  customProps,
  title,
  variant
}) => {
  return (
    <S.TitleContainer
      css={css}
      customProps={customProps}
    >
      <S.TitleStyled variant={variant}>
        {title || children}
      </S.TitleStyled>
    </S.TitleContainer>
  )
}

export { Title }
