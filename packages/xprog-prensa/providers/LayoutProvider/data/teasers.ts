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
    mb: '$3',
    '.TeaserImage': {
      display: 'none'
    }
  },
  className: 'TeaserHeadlineSm',
  subjectVariant: 'subject-default',
  subtitleVariant: 'subtitle-desktop',
  titleVariant: 'newstitle-5xl'
}
const TeaserHeadlineLg: TeaserProps = {
  css: {
    ...alignToCenter,
    mb: '$3',
    '.TeaserImage': {
      display: 'none'
    }
  },
  className: 'TeaserHeadlineLg',
  subjectVariant: 'subject-default',
  subtitleVariant: 'subtitle-desktop',
  titleVariant: 'newstitle-6xl'
}
const TeaserImageBottom: TeaserProps = {
  css: {
    mb: '$3',
    '.TeaserImageContainer': {
      mt: '$3'
    }
  },
  className: 'TeaserImageBottom',
  imageDerivative: '3x1',
  imageVariant: 'bottom',
  subtitleVariant: 'subtitle-desktop',
  subjectVariant: 'subject-default',
  titleVariant: 'newstitle-5xl'
}
const TeaserImageLeft: TeaserProps = {
  css: {
    mb: '$3',
    '.TeaserImageContainer': {
      maxWidth: '140px',
      mr: '$3'
    }
  },
  className: 'TeaserImageLeft',
  imageDerivative: '1x1',
  imageVariant: 'left',
  subjectVariant: 'subject-default',
  subtitleVariant: 'subtitle-desktop',
  titleVariant: 'newstitle-md'
}
const TeaserImageRight: TeaserProps = {
  css: {
    mb: '$3',
    '.TeaserImageContainer': {
      maxWidth: '100px',
      ml: '$3'
    }
  },
  className: 'TeaserImageRight',
  imageDerivative: '1x1',
  imageVariant: 'right',
  subjectVariant: 'subject-default',
  subtitleVariant: 'subtitle-desktop',
  titleVariant: 'newstitle-md'
}
const TeaserImageTop: TeaserProps = {
  css: {
    mb: '$3',
    '.TeaserImageContainer': {
      mb: '$3'
    }
  },
  className: 'TeaserImageTop',
  imageDerivative: '3x1',
  imageVariant: 'top',
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
