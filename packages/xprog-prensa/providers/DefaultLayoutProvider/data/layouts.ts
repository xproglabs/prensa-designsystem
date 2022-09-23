import * as t from '../../../news/PageBlock/types'
import T from './teasers'

const LayoutDefault: t.SlotLayoutConfig = {
  customCss: {
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
  default: [T.TDNoImg, T.TDNoImg]
}

const LayoutFeatured: t.SlotLayoutConfig = {
  customCss: {
    column: {
      align: ['row', 'center', 'top'],
      width: '100%',
      '@lg': {
        align: ['row', 'between', 'top'],
      }
    }
  },
  default: [T.TDImgTop, T.TDImgTop]
}


const LayoutGrid: t.SlotLayoutConfig = {
  customCss: {
    column: {
      '@lg': {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '$4'
      }
    }
  },
  default: [T.TDImgTop, T.TDImgTop]
}

export const slotLayouts = {
  LayoutDefault,
  LayoutFeatured,
  LayoutGrid
}

export const slotLayoutArray: string[] = Object.keys(slotLayouts)

export type slotLayoutsTypes = typeof slotLayoutArray
