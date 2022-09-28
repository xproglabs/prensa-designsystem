import React from 'react'

import * as S from './styles'
import * as t from './types'

const Subject: React.FC<t.SubjectProps> = ({
  bgColor,
  color,
  children,
  css,
  customProps,
  subject,
  variant
}) => {
  let variantCss: t.SubjectCSSType = {}
  if(variant === 'default') {
    variantCss = {
      color: `$${color}`
    }
  }
  if(variant === 'filled') {
    variantCss = {
      backgroundColor: `$${bgColor}`,
      color: `$${color}`
    }
  }
  return (
    <S.SubjectContainer
      css={css}
      customProps={customProps}
    >
      <S.SubjectText css={variantCss} variant={variant}>
        {subject || children}
      </S.SubjectText>
    </S.SubjectContainer>
  )
}

export { Subject }
