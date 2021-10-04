import { LayoutProps } from '../../../layouts'
import { parseFonts, tokensFonts } from '../tokens/fonts'
import { SUBJECT_DEFAULT } from '../tokens/subject'

export const TEASER_IMAGE_TOP: LayoutProps = {
  box: {
    align: ['column', 'column'],
    pb: [0, 0],
    pt: [0, 0]
  },
  title: {
    enabled: true,
    ...parseFonts(
      tokensFonts.NEWS_TITLE_4,
      tokensFonts.NEWS_TITLE_5
    )
  },
  image: {
    enabled: true,
    dimension: ['3x2', '3x2'],
    height: ['180px', '180px'],
    width: ['120px', '120px']
  },
  related: {
    enabled: false
  },
  subject: SUBJECT_DEFAULT
}