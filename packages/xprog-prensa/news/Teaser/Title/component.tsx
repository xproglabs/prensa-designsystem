import React from 'react'

import { Link } from '../../../primitives/Link'
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
      {icon?.enabled && icon?.useIcon({ icon: icon.name, color: color || '' })}
      <S.TitleText variant={variant}>
        <Link
          title={title}
          href={path}
          component={customLink}
          {...customLinkProps}
        >
          {title || children}
        </Link>
      </S.TitleText>
    </S.TitleContainer>
  )
}

export { Title }
