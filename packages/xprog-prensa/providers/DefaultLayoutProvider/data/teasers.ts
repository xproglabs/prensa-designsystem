import * as t from '../../../news/PageBlock/types'

const TDNoImg: t.CSSType = {
  backgroundColor: 'white',
  width: '100%',
  height: '80px',
  '@lg': {
    height: '300px'
  }
}

const TDImgTop: t.CSSType = {
  backgroundColor: '$basicSuccess700',
  width: '100%',
  height: '120px',
  '@lg': {
    height: '272px !important'
  }
}

const teasers = {
  TDNoImg,
  TDImgTop
}

export default teasers