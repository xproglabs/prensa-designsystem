import React from 'react'

import * as S from './styles'
import { Subject } from './Subject'
import { Subtitle } from './Subtitle'
import { Title } from './Title'
import * as t from './types'

const Teaser: React.FC<t.TeaserProps> = ({
  css,
  components,
  customProps,
  subject,
  subjectVariant,
  subtitle,
  subtitleVariant,
  title,
  titleVariant
}) => {
  const TeaserSubject: React.FC<t.SubjectProps> = components?.subject
  const TeaserSubjectProps: t.SubjectProps = {
    subject,
    variant: subjectVariant
  }
  const TeaerSubtitle: React.FC<t.SubtitleProps> = components?.subtitle
  const TeaserSubtitleProps: t.SubtitleProps = {
    subtitle,
    variant: subtitleVariant
  }
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
      <TeaserSubject {...TeaserSubjectProps} />
      <TeaserTitle {...TeaserTitleProps} />
      <TeaerSubtitle {...TeaserSubtitleProps} />
    </S.TeaserStyled>
  )
}

Teaser.defaultProps = {
  components: {
    subject: Subject,
    subtitle: Subtitle,
    title: Title
  }
}

export { Teaser }
