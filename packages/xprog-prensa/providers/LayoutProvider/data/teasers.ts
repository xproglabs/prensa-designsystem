import { CSSType } from '../../../news/PageBlock/types'
import { TeaserProps } from '../../../news/Teaser/types'

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

const TeaserHeadline: TeaserProps = {
  titleVariants: 'newstitle-6xl'
}

export {
  TeaserHeadline,
  TDNoImg,
  TDImgTop
}