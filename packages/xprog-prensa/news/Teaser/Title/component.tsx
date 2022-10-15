import React from 'react'

import { useLink } from '../../../hooks'
import * as S from './styles'
import * as t from './types'

const Title: React.FC<t.TitleProps> = ({
  children,
  css,
  customLink,
  customProps,
  path,
  title,
  variant
}) => {
  return (
    <S.TitleContainer
      css={css}
      customProps={customProps}
    >
      {useLink({ title: title, href: path, component: customLink },
        <S.TitleText variant={variant}>
          {title || children}
        </S.TitleText>
      )}
    </S.TitleContainer>
  )
}

export { Title }
