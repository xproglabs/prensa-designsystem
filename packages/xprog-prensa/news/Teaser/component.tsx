import React from 'react'

import { Image } from './Image'
import { Related } from './Related'
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
  imageDerivative,
  imageVariant,
  path,
  relatedItems,
  relatedLayout,
  subject,
  subjectBgColor,
  subjectColor,
  subjectVariant,
  subtitle,
  subtitleVariant,
  title,
  titleVariant
}) => {
  const TeaserImage: React.FC<t.ImageProps> = components?.image
  const TeaserImageProps: t.ImageProps = {
    derivative: imageDerivative,
    image
  }
  const TeaserRelated: React.FC<t.RelatedProps> = components?.related
  const TeaserRelatedProps: t.RelatedProps = {
    items: relatedItems,
    layout: relatedLayout
  }
  const TeaserSubject: React.FC<t.SubjectProps> = components?.subject
  const TeaserSubjectProps: t.SubjectProps = {
    bgColor: subjectBgColor,
    color: subjectColor,
    subject,
    variant: subjectVariant
  }
  const TeaserSubtitle: React.FC<t.SubtitleProps> = components?.subtitle
  const TeaserSubtitleProps: t.SubtitleProps = {
    subtitle,
    variant: subtitleVariant
  }
  const TeaserTitle: React.FC<t.TitleProps> = components?.title
  const TeaserTitleProps: t.TitleProps = {
    path,
    title,
    variant: titleVariant
  }

  const TeaserStyledAlign: t.CSSType =
    imageVariant === 'left' ? { align: ['row', 'left', 'top'] }
      : imageVariant === 'top' ? { align: ['column', 'left', 'top'] }
        : imageVariant === 'right' ? { align: ['row-reverse', 'right', 'top'] }
          : imageVariant === 'bottom' ? { align: ['column-reverse', 'left', 'top'] } : {}
  
  const TeaserStyledProps: t.TeaserStyledProps = {
    css: {
      ...css,
      ...TeaserStyledAlign
    },
    customProps
  }
  const TeaserWrapContent: React.FC<t.TeaserWrapProps> = S.TeaserWrap

  return (
    <S.TeaserStyled {...TeaserStyledProps}>
      {imageVariant && (
        <TeaserImage {...TeaserImageProps} />
      )}
      <TeaserWrapContent>
        <TeaserSubject {...TeaserSubjectProps} />
        <TeaserTitle {...TeaserTitleProps} />
        <TeaserSubtitle {...TeaserSubtitleProps} />
        {relatedItems && relatedLayout && <TeaserRelated {...TeaserRelatedProps} />}
      </TeaserWrapContent>
    </S.TeaserStyled>
  )
}

Teaser.defaultProps = {
  components: {
    image: Image,
    related: Related,
    subject: Subject,
    subtitle: Subtitle,
    title: Title
  }
}

export { Teaser }
