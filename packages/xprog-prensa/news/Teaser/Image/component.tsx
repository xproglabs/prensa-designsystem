import React from 'react'

import * as S from './styles'
import * as t from './types'

const Image: React.FC<t.ImageProps> = ({
  children,
  css,
  customProps,
  image,
  variant
}) => {
  return (
    <S.ImageContainer
      css={css}
      customProps={customProps}
    >
      <S.ImageFile variant={variant}>
        {image || children}
      </S.ImageFile>
    </S.ImageContainer>
  )
}

export { Image }
