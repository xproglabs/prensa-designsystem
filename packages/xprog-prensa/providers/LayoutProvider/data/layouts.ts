import * as t from '../../../news/PageBlock/types'
import { teasers as T } from './teasers'

const LayoutDefault: t.SlotConfigProps = {
  css: {
    column: {
      align: ['row', 'center', 'top'],
      flexWrap: 'wrap',
      width: '100%',
      '@lg': {
        align: ['row', 'between', 'top']
      }
    }
  },
  customProps: {
    column: {
      className: 'MyLayoutColumn'
    },
    item: {
      className: 'MyLayoutItem'
    }
  },
  slotConfig: {
    Template100: {
      slotLeft: {
        default: [T.TeaserHeadlineSm, T.TeaserImageRight]
      }
    }
  }
}

const LayoutFeatured: t.SlotConfigProps = {
  css: {
    column: {
      align: ['column', 'center', 'top'],
      width: '100%'
    },
    item: {
      mb: '$3'
    }
  },
  slotConfig: {
    Template100: {
      slotLeft: {
        default: [T.TeaserHeadlineSm, T.TeaserHeadlineLg]
      }
    },
    Template7030: {
      slotLeft: {
        'default': [T.TeaserImageRight, T.TeaserImageRight],
        '1': [T.TeaserHeadlineSm, T.TeaserHeadlineLg],
        '2': [T.TeaserHeadlineSm, T.TeaserHeadlineSm],
        '2:1': [T.TeaserHeadlineSm, T.TeaserHeadlineLg],
        '3:1': [T.TeaserHeadlineSm, T.TeaserHeadlineLg],
        '3:2': [T.TeaserImageRight, T.TeaserHeadlineSm],
        '4:1': [T.TeaserHeadlineSm, T.TeaserHeadlineLg],
        '4:2': [T.TeaserHeadlineSm, T.TeaserHeadlineSm]
      },
      slotCenter: {
        default: [T.TeaserImageRight, T.TeaserImageRight],
        '1': [T.TeaserHeadlineSm, T.TeaserHeadlineSm]
      }
    },
    Template30: {
      slotLeft: {
        default: [T.TeaserImageRight, T.TeaserImageRight],
        '1': [T.TeaserHeadlineSm, T.TeaserHeadlineSm],
        '2:1': [T.TeaserHeadlineSm, T.TeaserHeadlineSm],
        '3:1': [T.TeaserHeadlineSm, T.TeaserHeadlineSm],
        '4:1': [T.TeaserHeadlineSm, T.TeaserHeadlineSm]
      },
      slotCenter: {
        default: [T.TeaserImageRight, T.TeaserImageRight],
        '1': [T.TeaserHeadlineSm, T.TeaserHeadlineSm],
        '2:1': [T.TeaserHeadlineSm, T.TeaserHeadlineSm],
        '3:1': [T.TeaserHeadlineSm, T.TeaserHeadlineSm],
        '4:1': [T.TeaserHeadlineSm, T.TeaserHeadlineSm]
      },
      slotRight: {
        default: [T.TeaserImageRight, T.TeaserImageRight],
        '1': [T.TeaserHeadlineSm, T.TeaserHeadlineSm],
        '2:1': [T.TeaserHeadlineSm, T.TeaserHeadlineSm],
        '3:1': [T.TeaserHeadlineSm, T.TeaserHeadlineSm],
        '4:1': [T.TeaserHeadlineSm, T.TeaserHeadlineSm]
      }
    }
  }
}

const LayoutGrid: t.SlotConfigProps = {
  css: {
    column: {
      '@lg': {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '$4'
      }
    }
  }
}

export const slotLayouts = {
  LayoutDefault,
  LayoutFeatured,
  LayoutGrid
}

export const slotLayoutArray: string[] = Object.keys(slotLayouts)

export type slotLayoutsTypes = typeof slotLayoutArray