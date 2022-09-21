import { PrensaEngineCSSProp } from '../../../types'

export const column100: PrensaEngineCSSProp = {
  active: true,
  default: {
    backgroundColor: 'white',
    height: '200px',
    mb: '$3',
    width: '100%'
  }
}

export const ColumnistImgTop: PrensaEngineCSSProp = {
  backgroundColor: 'yellow',
  mb: '$3',
  '@lg': {
    height: '200px',
    width: 'calc(25% - $4)',
  },
  width: 'calc(100% - $8)'
}

export const ColumnistImgLeft: PrensaEngineCSSProp = {
  backgroundColor: 'white',
  '@lg': {
    height: '120px',
    width: 'calc(25% - $4)',
  },
  width: 'calc(100% - $8)'
}


export const TDImgTop: PrensaEngineCSSProp = {
  backgroundColor: 'white',
  width: '100%',
  height: '80px',
  '@lg': {
    height: '120px'
  },
}

const teasers = {
  column100,
  ColumnistImgTop,
  ColumnistImgLeft,
  TDImgTop
}

export { teasers }