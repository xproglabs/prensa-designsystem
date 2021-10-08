import { LayoutProps } from '../../../layouts'
import { parseFonts, tokensFonts } from '../tokens/fonts'
import { SUBJECT_DEFAULT } from '../tokens/subject'

export const TEASER_IMAGE_MEDIUM: LayoutProps = {
  box: {
    align: ['row', 'row-reverse'],
    pb: [2, 2],
    pt: [2, 2]
  },
  box_wrap: {
    // aligny: ['top', 'top'],
    // height: ['auto', 'auto'],
    mr: [2, 3],
    ml: [2, 3],
    width: ['100% - 32px', '100% - 48px']
  },
  datetime_enabled: false,
  image: {
    dimension: ['1x1', '2x1'],
    height: ['80px', '168px'],
    width: ['80px', '168px'],
    enabled: true,
    mb: [3, 3]
  },
  title: {
    enabled: true,
    ...parseFonts(
      tokensFonts.NEWS_TITLE_8,
      tokensFonts.NEWS_TITLE_5
    )
  },
  related: {
    enabled: false
  },
  subject: SUBJECT_DEFAULT
}