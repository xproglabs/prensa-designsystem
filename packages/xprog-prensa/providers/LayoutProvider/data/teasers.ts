import { CSSType } from '../../../news/PageBlock/types'

const TDNoImg: CSSType = {
  backgroundColor: 'white',
  height: '80px',
  width: '100%',
  '@lg': {
    height: '300px'
  }
}

const TDImgTop: CSSType = {
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