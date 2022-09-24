import { CSSType } from '../../../news/PageBlock/types'

const TDNoImg: CSSType = {
  backgroundColor: '$basicWhiteAlpha800',
  height: '80px',
  width: '100%',
  '@lg': {
    height: '300px'
  }
}

const TDImgTop: CSSType = {
  backgroundColor: '$basicWhiteAlpha800',
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