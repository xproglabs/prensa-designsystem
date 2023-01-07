import React from 'react'

import { useLink } from '../../../hooks'
import * as S from './styles'
import * as t from './types'

const Title: React.FC<t.TitleProps> = ({
  children,
  css,
  customLink,
  customLinkProps,
  customProps,
  color,
  icon,
  path,
  title,
  variant
}) => {
  return (
    <S.TitleContainer
      css={css}
      customProps={customProps}
    >
      {icon?.enabled && icon?.useIcon({ icon: icon.name, color })}
      {useLink(
        {
          title: title,
          href: path,
          component: customLink,
          ...customLinkProps
        },
        <S.TitleText variant={variant}>
          {title || children}
        </S.TitleText>
      )}
    </S.TitleContainer>
  )
}

export { Title }
