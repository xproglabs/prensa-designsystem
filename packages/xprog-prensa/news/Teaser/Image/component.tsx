import React from 'react'

import * as S from './styles'
import * as t from './types'

const Image: React.FC<t.ImageProps> = ({
  children,
  css,
  customProps,
  Image,
  variant
}) => {
  return (
    <S.ImageContainer
      css={css}
      customProps={customProps}
    >
      <S.ImageText variant={variant}>
        {Image || children}
      </S.ImageText>
    </S.ImageContainer>
  )
}

export { Image }
