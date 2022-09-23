import * as t from '../../../news/PageBlock/types'

const TDNoImg: t.CSSType = {
  backgroundColor: 'white',
  height: '80px',
  width: '100%',
  '@lg': {
    height: '300px'
  }
}

const TDImgTop: t.CSSType = {
  backgroundColor: '$basicSuccess400',
  height: '120px',
  width: '100%',
  '@lg': {
    height: '272px !important'
  }
}

const teasers = {
  TDNoImg,
  TDImgTop
}

export default teasers