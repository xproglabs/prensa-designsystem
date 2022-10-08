import React from 'react'

import * as S from './styles'
import * as t from './types'

const Number: React.FC<t.NumberProps> = ({
  bgColor,
  color,
  children,
  css,
  customProps,
  textVariant,
  variant
}) => {
  let containerCss: t.NumberCSSType = {}
  let variantCss: t.NumberCSSType = css
  if (variant === 'default') {
    variantCss = {
      color: `$${color}`
    }
  }
  if (variant === 'filled') {
    containerCss = {
      ...css,
      backgroundColor: `$${bgColor}`
    }
    variantCss = {
      color: `$${color}`
    }
  }
  return (
    <S.NumberContainer
      css={containerCss}
      customProps={customProps}
    >
      <S.NumberText css={variantCss} variant={textVariant}>
        {children}
      </S.NumberText>
    </S.NumberContainer>
  )
}

export { Number }
