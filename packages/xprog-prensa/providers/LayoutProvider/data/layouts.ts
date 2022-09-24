import * as t from '../../../news/PageBlock/types'
import { teasers as T } from './teasers'

const LayoutDefault: t.SlotConfigProps = {
  css: {
    column: {
      align: ['row', 'center', 'top'],
      flexWrap: 'wrap',
      mb: '$3',
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
  default: [T.TeaserHeadlineSm, T.TeaserHeadlineSm]
}

const LayoutFeatured: t.SlotConfigProps = {
  css: {
    column: {
      align: ['row', 'center', 'top'],
      width: '100%',
      '@lg': {
        align: ['row', 'between', 'top'],
      }
    }
  },
  default: [T.TeaserHeadlineSm, T.TeaserHeadlineSm]
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
  },
  default: [T.TeaserHeadlineSm, T.TeaserHeadlineSm]
}

export const slotLayouts = {
  LayoutDefault,
  LayoutFeatured,
  LayoutGrid
}

export const slotLayoutArray: string[] = Object.keys(slotLayouts)

export type slotLayoutsTypes = typeof slotLayoutArray
