import { CSSType, TeaserProps } from '../../../news/Teaser/types'

const alignToCenter: CSSType = {
  textAlign: 'center',
  '.TeaserSubject': {
    align: ['column', 'center', 'top']
  },
  '.TeaserSubtitle': {
    align: ['column', 'center', 'top']
  }
}

const TeaserHeadlineSm: TeaserProps = {
  css: {
    ...alignToCenter,
  },
  className: 'TeaserHeadlineSm',
  subjectVariant: 'subject-default',
  subtitleVariant: 'subtitle-desktop',
  titleVariant: 'newstitle-5xl'
}
const TeaserHeadlineLg: TeaserProps = {
  css: {
    ...alignToCenter,
  },
  className: 'TeaserHeadlineLg',
  subjectVariant: 'subject-default',
  subtitleVariant: 'subtitle-desktop',
  titleVariant: 'newstitle-6xl'
}
const TeaserImageBottom: TeaserProps = {
  className: 'TeaserImageBottom',
  subtitleVariant: 'subtitle-desktop',
  subjectVariant: 'subject-default',
  titleVariant: 'newstitle-5xl'
}
const TeaserImageLeft: TeaserProps = {
  className: 'TeaserImageLeft',
  subjectVariant: 'subject-default',
  subtitleVariant: 'subtitle-desktop',
  titleVariant: 'newstitle-md'
}
const TeaserImageRight: TeaserProps = {
  className: 'TeaserImageRight',
  subjectVariant: 'subject-default',
  subtitleVariant: 'subtitle-desktop',
  titleVariant: 'newstitle-md'
}
const TeaserImageTop: TeaserProps = {
  className: 'TeaserImageTop',
  subjectVariant: 'subject-default',
  subtitleVariant: 'subtitle-desktop',
  titleVariant: 'newstitle-xl'
}
const TeaserRelated: TeaserProps = {
  css: {
    '.TeaserSubject': {
      display: 'none'
    },
    '.TeaserSubtitle': {
      display: 'none'
    }
  },
  className: 'TeaserRelated',
  titleVariant: 'newstitle-lg'
}

export const teasers = {
  TeaserHeadlineSm,
  TeaserHeadlineLg,
  TeaserImageBottom,
  TeaserImageLeft,
  TeaserImageRight,
  TeaserImageTop,
  TeaserRelated
}

export const teasersArray: string[] = Object.keys(teasers)

export type teasersTypes = typeof teasersArray
