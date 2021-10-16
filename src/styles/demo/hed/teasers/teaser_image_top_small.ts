import { LayoutProps } from '../../../layouts'
import { parseFonts, tokensFonts } from '../tokens/fonts'
import { SUBJECT_DEFAULT } from '../tokens/subject'

export const TEASER_IMAGE_TOP_SMALL: LayoutProps = {
  box: {
    align: ['row-reverse', 'column'],
    mb: [3, 3]
  },
  box_wrap: {
    align: ['column', 'column'],
    alignx: ['left', 'left'],
    mr: [2, '0px'],
    ml: ['0px', '0px'],
    width: ['calc(100% - 96px)', '100%']
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
    layout: ['responsive', 'responsive'],
    height: ['80px', '139px'],
    width: ['80px', '278px'],
    wrap_width: ['80px', '278px'],
  },
  related: {
    enabled: false
  },
  subject: SUBJECT_DEFAULT
}