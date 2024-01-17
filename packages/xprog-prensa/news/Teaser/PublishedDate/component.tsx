import React from 'react'

import { Link } from '../../../primitives/Link'
import * as S from './styles'
import * as t from './types'

const PublishedDate: React.FC<t.DateProps> = ({
  children,
  css,
  customLink,
  customLinkProps,
  customProps,
  publishedDate,
  linkProps,
  path,
  variant
}) => {
  return (
    <S.Container
      css={css}
      customProps={customProps}
    >
      <S.Text variant={variant}>

        {publishedDate || children}
        
      </S.Text>
    </S.Container>
  )
}

export { PublishedDate }
