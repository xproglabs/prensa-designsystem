import React from 'react'

import * as S from './styles'
import { Title } from './Title'
import * as t from './types'

const Teaser: React.FC<t.TeaserProps> = ({
  css,
  components,
  customProps,
  title,
  titleVariant
}) => {
  const TeaserTitle: React.FC<t.TitleProps> = components?.title
  const TeaserTitleProps: t.TitleProps = {
    title,
    variant: titleVariant
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
