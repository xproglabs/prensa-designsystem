import { PageBlockCSSType } from '../../../news/PageBlock/types'

const TDNoImg: PageBlockCSSType = {
  backgroundColor: 'white',
  height: '80px',
  width: '100%',
  '@lg': {
    height: '300px'
  }
}

const TDImgTop: PageBlockCSSType = {
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