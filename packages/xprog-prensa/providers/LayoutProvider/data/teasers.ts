import { Teaser, PageBlockTypes } from '../../../types'

const alignToCenter: PageBlockTypes.PageBlockCSSType = {
  textAlign: 'center',
  '.TeaserSubject': {
    align: ['column', 'center', 'top']
  },
  '.TeaserSubtitle': {
    align: ['column', 'center', 'top']
  }
}

const TeaserRelated: Teaser.TeaserProps = {
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

const TeaserHeadlineSm: Teaser.TeaserProps = {
  css: {
    ...alignToCenter,
    mb: '$3',
    '.TeaserImage': {
      display: 'none'
    }
  },
  className: 'TeaserHeadlineSm',
  relatedLayout: TeaserRelated,
  subjectBgColor: 'basicSuccess800',
  subjectColor: 'basicWhite',
  subjectVariant: 'filled',
  subtitleVariant: 'subtitle-desktop',
  titleVariant: 'newstitle-5xl'
}

const TeaserHeadlineLg: Teaser.TeaserProps = {
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
  subjectColor: 'brandTertiary400',
  subjectVariant: 'default',
  subtitleVariant: 'subtitle-desktop',
  titleVariant: 'newstitle-6xl'
}

const TeaserImageBottom: Teaser.TeaserProps = {
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
  subjectVariant: 'filled',
  titleVariant: 'newstitle-5xl'
}

const TeaserImageLeft: Teaser.TeaserProps = {
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
  subjectVariant: 'filled',
  subtitleVariant: 'subtitle-desktop',
  titleVariant: 'newstitle-md'
}

const TeaserImageRight: Teaser.TeaserProps = {
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
  subjectVariant: 'filled',
  subtitleVariant: 'subtitle-desktop',
  titleVariant: 'newstitle-md'
}

const TeaserImageRightLg: Teaser.TeaserProps = {
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

const TeaserImageTop: Teaser.TeaserProps = {
  css: {
    mb: '$3',
    '.TeaserImageContainer': {
      mb: '$3'
    }
  },
  className: 'TeaserImageTop',
  imageDerivative: '3x1',
  imageVariant: 'top',
  subjectVariant: 'filled',
  subtitleVariant: 'subtitle-desktop',
  titleVariant: 'newstitle-xl'
}

const TeaserNumber: Teaser.TeaserProps = {
  className: 'TeaserNumber',
  imageVariant: 'left',
  numberBgColor: 'basicError300',
  numberColor: 'basicWhiteAlpha800',
  numberVariant: 'filled',
  numberValue: '222',
  css: {
    '.TeaserSubtitle': {
      display: 'none'
    },
    '.TeaserNumber': {
      align: ['row', 'center', 'middle'],
      borderRadius: '$circle',
      fontFamily: '$primary',
      fontSize: '24px',
      height: '100px',
      width: '100px'
    },
    '.TeaserWrap': {
      ml: '24px',
      width: 'calc(100% - 124px)'
    }
  }
}

const TeaserHeadlineImageSm: Teaser.TeaserProps = {
  className: 'TeaserHeadlineImage',
  imageDerivative: '1x1',
  imageVariant: 'background',
  subjectVariant: 'filled',
  titleVariant: 'newstitle-2xl',
  css: {
    position: 'relative',
    '.TeaserImage': {
      backgroundColor: '$basicBlackAlpha400'
    },
    '.TeaserSubtitle': {
      display: 'none'
    },
    '.TeaserTitleText': {
      color: '$basicWhite',
      textShadow: 'rgb(0 0 0 / 50%) 2px 2px 3px'
    },
    '.TeaserWrap': {
      align: ['column', 'left', 'bottom'],
      aspectRatio: '1 / 1',
      background: 'linear-gradient(rgba(0, 0, 0, 0) 43.75%, rgb(0, 0, 0) 100%)',
      position: 'absolute',
      p: '$4',
      height: 'calc(100% - 64px)',
      width: 'calc(100% - 64px)'
    }
  }
}

const TeaserHeadlineImageMd: Teaser.TeaserProps = {
  className: 'TeaserHeadlineImage',
  imageDerivative: '1x1',
  imageVariant: 'background',
  subjectVariant: 'filled',
  titleVariant: 'newstitle-4xl',
  css: {
    position: 'relative',
    '.TeaserImage': {
    },
    '.TeaserSubtitle': {
      display: 'none'
    },
    '.TeaserTitleText': {
      color: '$basicWhite',
      textShadow: 'rgb(0 0 0 / 50%) 2px 2px 3px'
    },
    '.TeaserWrap': {
      align: ['column', 'left', 'bottom'],
      aspectRatio: '1 / 1',
      background: 'linear-gradient(rgba(0, 0, 0, 0) 43.75%, rgb(0, 0, 0) 100%)',
      position: 'absolute',
      p: '$4',
      height: 'calc(100% - 64px)',
      width: 'calc(100% - 64px)'
    }
  }
}

const TeaserHeadlineImageLg: Teaser.TeaserProps = {
  className: 'TeaserHeadlineImage',
  imageDerivative: '3x1',
  imageVariant: 'background',
  subtitleVariant: 'newstitle-3xl',
  subjectVariant: 'filled',
  titleVariant: 'newstitle-6xl',
  css: {
    position: 'relative',
    '.TeaserSubtitleText': {
      color: '$basicWhite',
      textShadow: 'rgb(0 0 0 / 50%) 2px 2px 3px'
    },
    '.TeaserTitleText': {
      color: '$basicWhite',
      textShadow: 'rgb(0 0 0 / 50%) 2px 2px 3px'
    },
    '.TeaserWrap': {
      align: ['column', 'left', 'bottom'],
      aspectRatio: '3 / 1',
      background: 'linear-gradient(rgba(0, 0, 0, 0) 43.75%, rgb(0, 0, 0) 100%)',
      position: 'absolute',
      p: '$4',
      height: 'calc(100% - 64px)',
      width: 'calc(100% - 64px)'
    }
  }
}

export const teasers = {
  TeaserHeadlineImageSm,
  TeaserHeadlineImageMd,
  TeaserHeadlineImageLg,
  TeaserHeadlineSm,
  TeaserHeadlineLg,
  TeaserImageBottom,
  TeaserImageLeft,
  TeaserImageRight,
  TeaserImageRightLg,
  TeaserImageTop,
  TeaserRelated,
  TeaserNumber
}
export const teasersKeys = Object.keys(teasers)
export type TeasersType = typeof teasersKeys
