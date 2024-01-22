import React from 'react'

import * as S from './styles'
import * as t from './types'

const PublishedDate: React.FC<t.DateProps> = ({
  children,
  css,
  customProps,
  publishedDate,
  variant
}) => {
  let variantCss: t.PublishedDateCSSType = {}
  return (
    <S.Container
      css={css}
      customProps={customProps}
    >
      <S.Text css={variantCss} variant={variant}>

        {publishedDate || children}
        
      </S.Text>
    </S.Container>
  )
}

export { PublishedDate }
