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
      <S.TitleText variant={variant}>
        {title || children}
      </S.TitleText>
    </S.TitleContainer>
  )
}

export { Title }
