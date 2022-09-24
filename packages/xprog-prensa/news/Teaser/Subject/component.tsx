import React from 'react'

import * as S from './styles'
import * as t from './types'

const Subject: React.FC<t.SubjectProps> = ({
  children,
  css,
  customProps,
  subject,
  variant
}) => {
  return (
    <S.SubjectContainer
      css={css}
      customProps={customProps}
    >
      <S.SubjectText variant={variant}>
        {subject || children}
      </S.SubjectText>
    </S.SubjectContainer>
  )
}

export { Subject }
