import { LayoutTypes } from '../../../news/PageBlock/types/LayoutTypes'
import * as t from './teasers'

const LayoutDefault: LayoutTypes = {
  active: true,
  customColumnCss: {
    align: ['row', 'center', 'top'],
    flexWrap: 'wrap',
    mb: '$3',
    width: '100%',
    '@lg': {
      align: ['row', 'between', 'top']
    }
  },
  default: [t.TDImgTop, t.TDImgTop]
}

const LayoutFeatured: LayoutTypes = {
  active: true,
  customColumnCss: {
    align: ['row', 'center', 'top'],
    backgroundColor: '$basicSuccess300',
    flexWrap: 'wrap',
    mb: '$3',
    width: '100%',
    '@lg': {
      align: ['row', 'between', 'top']
    }
  },
  default: [t.TDImgTop, t.TDImgTop]
}

export const layouts = {
  LayoutDefault,
  LayoutFeatured
}

export const layoutArray: string[] = Object.keys(layouts)

export type layoutsTypes = typeof layoutArray
