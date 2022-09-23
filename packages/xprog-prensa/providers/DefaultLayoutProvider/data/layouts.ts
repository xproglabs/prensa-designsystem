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


const LayoutGrid: t.SlotLayoutConfig = {
  customCss: {
    column: {
      '@lg': {
        align: ['row', 'between', 'top'],
        maxWidth: '1280px',
        width: 'calc(100% - $8)',
        '.Column:nth-child(1)': {
          width: 'calc(100% - $8)'
        }
      },
      '.Column:nth-child(2)': {
        display: 'none'
      },
      '.Column:nth-child(3)': {
        display: 'none'
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
