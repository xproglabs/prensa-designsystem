import { CSSType, TeaserProps } from '../Teaser/types'

const alignToCenter: CSSType = {
  textAlign: 'center',
  '.TeaserSubject': {
    align: ['column', 'center', 'top']
  },
  '.TeaserSubtitle': {
    align: ['column', 'center', 'top']
  }
}

const TeaserRelated: TeaserProps = {
  css: {
    p: 0,
    '.TeaserImageContainer': {
      display: 'none'
    },
    '.TeaserSubject': {
      display: 'none'
    },
    '.TeaserSubtitle': {
      display: 'none'
    },
    '.TeaserTitle': {
      align: ['row', 'center', 'top'],
    },
    '.TeaserTitleText': {
      align: ['row', 'center', 'top'],
      mb: '$2'
    },
    '.TeaserTitleText:before': {
      content: '🍀'
    }
  },
  className: 'TeaserRelated',
  titleVariant: 'newstitle-md'
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
  relatedLayout: TeaserRelated,
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
    },
    '.TeaserRelated': {
      align: ['row', 'center', 'top'],
    }
  },
  className: 'TeaserHeadlineLg',
  relatedLayout: TeaserRelated,
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
    },

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
const TeaserImageRightLg: TeaserProps = {
  ...TeaserImageRight,
  css: {
    mb: '$3',
    '.TeaserImageContainer': {
      maxWidth: '240px',
      ml: '$3'
    }
  },
  imageDerivative: '3x2',
  titleVariant: 'newstitle-3xl'
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

export const teasers = {
  TeaserHeadlineSm,
  TeaserHeadlineLg,
  TeaserImageBottom,
  TeaserImageLeft,
  TeaserImageRight,
  TeaserImageRightLg,
  TeaserImageTop,
  TeaserRelated
}

export const teasersArray: string[] = Object.keys(teasers)

export type teasersTypes = typeof teasersArray
