import React from 'react'

import * as S from './styles'
import * as t from './types'

const Title: React.FC<t.TitleProps> = ({
  children,
  css,
  customProps,
  path,
  title,
  variant
}) => {
  return (
    <S.TitleContainer
      css={css}
      customProps={customProps}
    >
      <a href={path} title={title}>
        <S.TitleText variant={variant}>
          {title || children}
        </S.TitleText>
      </a>
    </S.TitleContainer>
  )
}

export { Title }
