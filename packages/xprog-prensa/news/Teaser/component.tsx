import React from 'react'

import { Image } from './Image'
import * as S from './styles'
import { Subject } from './Subject'
import { Subtitle } from './Subtitle'
import { Title } from './Title'
import * as t from './types'

const Teaser: React.FC<t.TeaserProps> = ({
  css,
  components,
  customProps,
  image,
  imageVariant,
  subject,
  subjectVariant,
  subtitle,
  subtitleVariant,
  title,
  titleVariant
}) => {
  const TeaserImage: React.FC<t.ImageProps> = components?.image
  const TeaserImageProps: t.ImageProps = {
    image,
    variant: imageVariant
  }
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

  const TeaserStyledAlign: t.CSSType =
    imageVariant === 'left' ? {
      align: ['row', 'left', 'top']
    } : imageVariant === 'top' ? {
      align: ['column', 'left', 'top']
    } : imageVariant === 'right' ? {
      align: ['row-reverse', 'right', 'top']
    } : imageVariant === 'bottom' ? {
      align: ['column-reverse', 'left', 'top']
    } : {}
  const TeaserStyledProps: t.TeaserStyledProps = {
    css: {
      ...css,
      ...TeaserStyledAlign
    },
    customProps
  }
  const TeaserWrapImage: React.FC<t.TeaserWrapProps> = S.TeaserWrap
  const TeaserWrapContent: React.FC<t.TeaserWrapProps> = S.TeaserWrap

  return (
    <S.TeaserStyled {...TeaserStyledProps}>
      {imageVariant && (
        <TeaserWrapImage>
          <TeaserImage {...TeaserImageProps} />
        </TeaserWrapImage>
      )}
      <TeaserWrapContent css={{ width: '100%' }}>
        <TeaserSubject {...TeaserSubjectProps} />
        <TeaserTitle {...TeaserTitleProps} />
        <TeaerSubtitle {...TeaserSubtitleProps} />
      </TeaserWrapContent>
    </S.TeaserStyled>
  )
}

Teaser.defaultProps = {
  components: {
    image: Image,
    subject: Subject,
    subtitle: Subtitle,
    title: Title
  }
}

export { Teaser }
