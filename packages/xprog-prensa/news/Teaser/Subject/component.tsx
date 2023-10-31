import React from 'react'

import * as S from './styles'
import * as t from './types'

const Subject: React.FC<t.SubjectProps> = ({
  bgColor,
  color,
  children,
  css,
  customProps,
  icon,
  subject,
  textVariant,
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
      <S.SubjectText css={variantCss} variant={textVariant}>
        {subject || children}
      </S.SubjectText>
      {icon?.enabled && icon?.useIcon({ icon: icon.name, color: color || '' }) || null}
    </S.SubjectContainer>
  )
}

export { Subject }
