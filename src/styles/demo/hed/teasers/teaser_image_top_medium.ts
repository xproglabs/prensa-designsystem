import { LayoutProps } from '../../../layouts'
import { parseFonts, tokensFonts } from '../tokens/fonts'
import { SUBJECT_DEFAULT } from '../tokens/subject'

export const TEASER_IMAGE_TOP_MEDIUM: LayoutProps = {
  box: {
    align: ['column', 'column'],
    mb: [3, 3]
  },
  box_wrap: {
    align: ['column', 'column'],
    alignx: ['left', 'left'],
    mr: [2, '0px'],
    mb: [2, 2],
    width: ['calc(100% - 96px)', '100%']
  },
  image: {
    enabled: true,
    dimension: ['2x1', '2x1'],
    layout: ['responsive', 'responsive'],
    height: ['200px', '200px'],
    mb: [2, 2],
    width: ['400px', '400px'],
    wrap_width: ['100%', '100%'],
  },
  related: {
    enabled: false
  },
  title: {
    enabled: true,
    ...parseFonts(
      tokensFonts.NEWS_TITLE_5,
      tokensFonts.NEWS_TITLE_5
    )
  },
  subject: SUBJECT_DEFAULT
}