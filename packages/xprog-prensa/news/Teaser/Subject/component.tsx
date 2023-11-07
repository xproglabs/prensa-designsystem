import React from 'react'

import * as S from './styles'
import * as t from './types'

const Subject: React.FC<t.SubjectProps> = ({
  bgColor,
  color,
  children,
  css,
  customProps,
  subjectIcon,
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
  
  const renderSubjectContent = (subjectIcon) => {
    if (subjectIcon?.enabled) {
      return (
        <S.SubjectContainer css={{ align: ['row', 'left', 'middle'] }}>
          <S.SubjectText css={{...variantCss, mr: '8px'}} variant={textVariant}>
            {subject || children}
          </S.SubjectText>
          {subjectIcon.useIcon()}
        </S.SubjectContainer>
      );
    } else {
      return (
        <S.SubjectText css={variantCss} variant={textVariant}>
          {subject || children}
        </S.SubjectText>
      )
    }
  };

  return (
    <S.SubjectContainer
      css={css}
      customProps={customProps}
    >
      {renderSubjectContent(subjectIcon)}
    </S.SubjectContainer>
  )
}

export { Subject }
