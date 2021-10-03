import { LayoutProps } from '../../../layouts'
import { parseFonts, tokensFonts } from '../tokens/fonts'
import { SUBJECT_DEFAULT } from '../tokens/subject'

export const TEASER_IMAGE_TOP: LayoutProps = {
  box: {
    align: ['column', 'row']
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
    dimension: ['2x1', '2x1'],
    height: ['120px', '120px'],
    width: ['120px', '120px']
  },
  related: {
    enabled: false
  },
  subject: SUBJECT_DEFAULT
}