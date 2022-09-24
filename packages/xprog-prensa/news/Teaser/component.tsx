import React, { ReactNode } from 'react'

import * as S from './styles'
import * as t from './types'
import { Title } from './Title'

const Teaser: React.FC<t.TeaserProps> = ({
  css,
  components,
  customProps,
  title,
  titleVariants
}) => {
  const TeaserTitle: React.FC<t.TitleProps> = components?.title
  const TeaserTitleProps: t.TitleProps = {
    title,
    variants: titleVariants
  }
  return (
    <S.TeaserStyled
      css={css}
      customProps={customProps}
    >
      <TeaserTitle {...TeaserTitleProps} />
    </S.TeaserStyled>
  )
}

Teaser.defaultProps = {
  components: {
    title: Title
  }
}

export { Teaser }
