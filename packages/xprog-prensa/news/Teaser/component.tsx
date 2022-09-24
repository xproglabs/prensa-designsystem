import React from 'react'

import * as S from './styles'
import * as t from './types'

const Teaser: React.FC<t.TeaserProps> = ({
  css,
  customProps,
  name,
  path
}) => {
  return (
    <S.TeaserStyled
      css={css}
      customProps={customProps}
    >
      <a href={path}>
        <S.TeaserLabel>{name}</S.TeaserLabel>
      </a>
    </S.TeaserStyled>
  )
}

export { Teaser }
