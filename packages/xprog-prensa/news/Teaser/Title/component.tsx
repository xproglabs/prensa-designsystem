import React from 'react'

import * as S from './styles'
import * as t from './types'

const Title: React.FC<t.TitleProps> = ({
  children,
  css,
  customProps,
  path,
  title,
  variant,
  wrapTitle
}) => {
  if (wrapTitle) {
    const WrapTitle = wrapTitle
    return (
      <S.TitleContainer
        css={css}
        customProps={customProps}
      >
        <WrapTitle>
          <a href={path} title={title}>
            <S.TitleText variant={variant}>
              {title || children}
            </S.TitleText>
          </a>
        </WrapTitle>
      </S.TitleContainer>
    )
    
  }
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
