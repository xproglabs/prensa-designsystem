import * as t from '../../../news/PageBlock/types'
import T from './teasers'

const LayoutDefault: t.SlotLayoutConfig = {
  customCss: {
    column: {
      align: ['row', 'center', 'top'],
      backgroundColor: '$basicSuccess300',
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
  customProps: {
    column: {
      className: 'MyLayoutColumn'
    },
    item: {
      className: 'MyLayoutItem'
    }
  },
  default: [T.TDImgTop, T.TDImgTop]
}

export const slotLayouts = {
  LayoutDefault,
  LayoutFeatured
}

export const slotLayoutArray: string[] = Object.keys(slotLayouts)

export type slotLayoutsTypes = typeof slotLayoutArray
