import React from 'react'

import * as S from './styles'
import * as t from './types'

const Subtitle: React.FC<t.SubtitleProps> = ({
  children,
  css,
  customProps,
  subtitle,
  variant
}) => {
  return (
    <S.SubtitleContainer
      css={css}
      customProps={customProps}
    >
      <S.SubtitleText variant={variant}>
        {subtitle || children}
      </S.SubtitleText>
    </S.SubtitleContainer>
  )
}

export { Subtitle }
