import { LayoutProps } from 'prensa/components/styles/layouts'
import { parseFonts, tokensFonts } from '../tokens/fonts'
import { SUBJECT_DEFAULT } from '../tokens/subject'

export const TEASER_IMAGE_TOP_XSMALL: LayoutProps = {
  box: {
    align: ['column', 'column'],
    mb: [3, 3]
  },
  box_wrap: {
    align: ['column', 'column'],
    alignx: ['left', 'left'],
    width: ['100%', '100%']
  },
  title: {
    enabled: true,
    ...parseFonts(
      tokensFonts.NEWS_TITLE_8,
      tokensFonts.NEWS_TITLE_7
    )
  },
  image: {
    enabled: true,
    dimension: ['1x1', '2x1'],
    height: ['80px', '133px'],
    layout: ['responsive', 'responsive'],
    mb: [2, 2],
    width: ['128px', '266px'],
    wrap_width: ['100%', '100%'],
  },
  related: {
    enabled: false
  },
  subject: SUBJECT_DEFAULT
}