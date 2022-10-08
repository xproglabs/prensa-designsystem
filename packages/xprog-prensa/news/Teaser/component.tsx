import React from 'react'

import { Image } from './Image'
import { Number } from './Number'
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
  numberBgColor,
  numberColor,
  numberVariant,
  numberValue,
  path,
  relatedItems,
  relatedLayout,
  subject,
  subjectBgColor,
  subjectColor,
  subjectCss,
  subjectTextVariant,
  subjectVariant,
  subtitle,
  subtitleVariant,
  title,
  titleVariant
}) => {

  const TeaserNumber: React.FC<t.NumberProps> | undefined = components?.number
  const TeaserNumberProps: t.NumberProps = {
    bgColor: numberBgColor,
    color: numberColor,
    children: numberValue,
    variant: numberVariant
  }
  const TeaserImage: React.FC<t.ImageProps> | undefined = components?.image
  const TeaserImageProps: t.ImageProps = {
    derivative: imageDerivative,
    image
  }
  const TeaserRelated: React.FC<t.RelatedProps> | undefined = components?.related
  const TeaserRelatedProps: t.RelatedProps = {
    items: relatedItems,
    layout: relatedLayout
  }
  const TeaserSubject: React.FC<t.SubjectProps> | undefined = components?.subject
  const TeaserSubjectProps: t.SubjectProps = {
    bgColor: subjectBgColor,
    color: subjectColor,
    css: subjectCss,
    subject,
    textVariant: subjectTextVariant,
    variant: subjectVariant
  }
  const TeaserSubtitle: React.FC<t.SubtitleProps> | undefined = components?.subtitle
  const TeaserSubtitleProps: t.SubtitleProps = {
    subtitle,
    variant: subtitleVariant
  }
  const TeaserTitle: React.FC<t.TitleProps> | undefined = components?.title
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
      {TeaserNumber && numberVariant !== 'none' && (
        <TeaserNumber {...TeaserNumberProps} />
      )}
      {TeaserImage && numberVariant == 'none' && imageVariant && (
        <TeaserImage {...TeaserImageProps} />
      )}
      <TeaserWrapContent>
        {TeaserSubject && <TeaserSubject {...TeaserSubjectProps} />}
        {TeaserTitle && <TeaserTitle {...TeaserTitleProps} />}
        {TeaserSubtitle && <TeaserSubtitle {...TeaserSubtitleProps} />}
        {TeaserRelated && relatedItems && relatedLayout && <TeaserRelated {...TeaserRelatedProps} />}
      </TeaserWrapContent>
    </S.TeaserStyled>
  )
}

Teaser.defaultProps = {
  components: {
    image: Image,
    number: Number,
    related: Related,
    subject: Subject,
    subtitle: Subtitle,
    title: Title
  },
  numberVariant: 'none'
}

export { Teaser }
